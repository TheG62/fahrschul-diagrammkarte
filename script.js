import trainingDiagramData from './data.js';

// Initialisierung der App
console.log("App initialisiert");

// Globale Variablen für die Diagrammkarte
let diagramData;
let currentView = 'overview';

// Konstante für den localStorage Key
const STORAGE_KEY = 'checklistStatus';
const NOTES_STORAGE_KEY = 'itemNotes';

// Funktion zum Laden der BVF Daten mit localStorage Integration
// Konstanten für den Ladevorgang
const MIN_LOADING_TIME = 1500; // Minimale Anzeigezeit in Millisekunden
const LOADING_MESSAGES = [
    'Initialisiere App...',
    'Lade Daten...',
    'Bereite Diagrammkarte vor...',
    'Fast fertig...'
];

// Funktion zum Aktualisieren der Ladeanzeige
function updateLoadingStatus(progress, messageIndex) {
    const progressBar = document.getElementById('loading-progress');
    const progressText = document.getElementById('progress-percentage');
    const loadingMessage = document.getElementById('loading-message');

    if (progressBar && progressText && loadingMessage) {
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        loadingMessage.textContent = LOADING_MESSAGES[messageIndex];
    }
}

// Modifizierte loadBVFData Funktion mit Ladefortschritt
async function loadBVFData() {
    const startTime = Date.now();
    let currentProgress = 0;
    let messageIndex = 0;

    try {
        // Start des Ladevorgangs
        updateLoadingStatus(currentProgress, messageIndex);

        // Importiere die Trainingsdaten
        messageIndex = 1;
        currentProgress = 25;
        updateLoadingStatus(currentProgress, messageIndex);
        const { default: trainingDiagramData } = await import('./data.js');
        
        // Lade den gespeicherten Status
        messageIndex = 2;
        currentProgress = 50;
        updateLoadingStatus(currentProgress, messageIndex);
        const savedStatus = localStorage.getItem(STORAGE_KEY);
        const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
        
        if (savedStatus || savedNotes) {
            currentProgress = 75;
            updateLoadingStatus(currentProgress, messageIndex);
            const statusData = savedStatus ? JSON.parse(savedStatus) : {};
            const notesData = savedNotes ? JSON.parse(savedNotes) : {};
            applyStoredStatus(trainingDiagramData, statusData, notesData);
        } else {
            diagramData = JSON.parse(JSON.stringify(trainingDiagramData));
        }

        // Finale Phase
        messageIndex = 3;
        currentProgress = 90;
        updateLoadingStatus(currentProgress, messageIndex);

        // Stelle sicher, dass die minimale Ladezeit eingehalten wird
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < MIN_LOADING_TIME) {
            await new Promise(resolve => setTimeout(resolve, MIN_LOADING_TIME - elapsedTime));
        }

        // Abschluss des Ladevorgangs
        currentProgress = 100;
        updateLoadingStatus(currentProgress, messageIndex);

        // Rendere die Diagrammkarte
        renderDiagramCard();
    } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
        document.getElementById('loading-message').textContent = 'Fehler beim Laden der App';
    }
}

// Funktion zum Anwenden des gespeicherten Status auf die Daten
function applyStoredStatus(trainingData, statusData) {
    // Erstelle eine Kopie der Originaldaten
    diagramData = JSON.parse(JSON.stringify(trainingData));
    
    // Durchlaufe alle Sektionen und aktualisiere den Status
    diagramData.sections.forEach(section => {
        if (section.items) {
            section.items.forEach(item => {
                if (statusData[item.id] !== undefined) {
                    item.ist_abgehakt = statusData[item.id];
                }
            });
        }
        if (section.subsections) {
            section.subsections.forEach(subsection => {
                if (subsection.items) {
                    subsection.items.forEach(item => {
                        if (statusData[item.id] !== undefined) {
                            item.ist_abgehakt = statusData[item.id];
                        }
                    });
                }
            });
        }
    });
}

// Funktion zum Speichern des aktuellen Status im localStorage
function saveChecklistStatus() {
    const statusData = {};
    const notesData = {};
    
    // Sammle den Status aller Items
    diagramData.sections.forEach(section => {
        if (section.items) {
            section.items.forEach(item => {
                statusData[item.id] = item.ist_abgehakt;
                notesData[item.id] = item.notes || "";
            });
        }
        if (section.subsections) {
            section.subsections.forEach(subsection => {
                if (subsection.items) {
                    subsection.items.forEach(item => {
                        statusData[item.id] = item.ist_abgehakt;
                notesData[item.id] = item.notes || "";
                    });
                }
            });
        }
    });
    
    // Speichere im localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statusData));
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesData));
}

// Funktion zum Rendern der Diagrammkarte
function renderDiagramCard() {
    const container = document.querySelector('.diagram-container');
    container.innerHTML = '';

    // Erstelle die Hauptstruktur
    const diagramContent = document.createElement('div');
    diagramContent.className = 'diagram-content';

    // Rendere die Sektionen
    diagramData.sections.forEach(section => {
        const sectionElement = createSectionElement(section);
        diagramContent.appendChild(sectionElement);
    });

    container.appendChild(diagramContent);
}

// Hilfsfunktion zum Erstellen von Sektionselementen
// Hilfsfunktion zum Erstellen der Prioritätenliste
function createPriorityList(items) {
    const uncheckedItems = items.filter(item => !item.ist_abgehakt);
    if (uncheckedItems.length === 0) return null;

    const container = document.createElement('div');
    container.className = 'priority-list';

    const title = document.createElement('h4');
    title.textContent = 'Nächste Fahrstunde - Schwerpunkte:';
    container.appendChild(title);

    const list = document.createElement('ul');
    uncheckedItems.slice(0, 5).forEach(item => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-item-id', item.id);
        listItem.textContent = item.title;
        listItem.addEventListener('click', () => handleItemCheck(item.id));
        list.appendChild(listItem);
    });

    container.appendChild(list);
    return container;
}

// Hilfsfunktion zum Sammeln aller Items einer Sektion
function getAllSectionItems(section) {
    let items = [];
    if (section.items) {
        items = items.concat(section.items);
    }
    if (section.subsections) {
        section.subsections.forEach(subsection => {
            if (subsection.items) {
                items = items.concat(subsection.items);
            }
        });
    }
    return items;
}

function createSectionElement(section) {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'section';
    sectionElement.id = section.id;

    const title = document.createElement('h2');
    title.textContent = section.title;
    sectionElement.appendChild(title);

    if (section.subsections) {
        section.subsections.forEach(subsection => {
            const subsectionElement = createSubsectionElement(subsection);
            sectionElement.appendChild(subsectionElement);
        });
    }

    if (section.items) {
        const itemsList = createItemsList(section.items);
        sectionElement.appendChild(itemsList);
    }

    // Füge Fortschrittsanzeige hinzu
    const progressBar = createProgressBar(section);
    if (progressBar) {
        sectionElement.appendChild(progressBar);
    }

    // Füge Prioritätenliste hinzu
    const allItems = getAllSectionItems(section);
    if (allItems.length > 0) {
        const priorityList = createPriorityList(allItems);
        if (priorityList) {
            sectionElement.appendChild(priorityList);
        }
    }

    return sectionElement;
}

// Hilfsfunktion zum Erstellen von Untersektionselementen
function createSubsectionElement(subsection) {
    const subsectionElement = document.createElement('div');
    subsectionElement.className = 'subsection';
    subsectionElement.id = subsection.id;

    const title = document.createElement('h3');
    title.textContent = subsection.title;
    subsectionElement.appendChild(title);

    if (subsection.items) {
        const itemsList = createItemsList(subsection.items);
        subsectionElement.appendChild(itemsList);
    }

    return subsectionElement;
}

// Hilfsfunktion zum Erstellen der Itemliste
// Hilfsfunktion zum Erstellen der Itemliste mit visueller Hervorhebung
function createItemsList(items) {
    const list = document.createElement('ul');
    list.className = 'items-list';

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = `${item.ist_abgehakt ? 'item-checked' : 'item-unchecked'} ${item.notes ? 'has-notes' : ''}`;

        // Container für Item-Inhalt
        const itemContent = document.createElement('div');
        itemContent.className = 'item-content';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.ist_abgehakt;
        checkbox.id = item.id;
        checkbox.addEventListener('change', () => handleItemCheck(item.id));

        const label = document.createElement('label');
        label.htmlFor = item.id;
        label.textContent = item.title;

        // Füge ein Icon für den Status hinzu
        const icon = document.createElement('span');
        icon.className = `status-icon ${item.ist_abgehakt ? 'checked' : 'unchecked'}`;
        icon.innerHTML = item.ist_abgehakt ? '✓' : '!';

        itemContent.appendChild(checkbox);
        itemContent.appendChild(icon);
        itemContent.appendChild(label);

        // Notiz-Button
        const noteButton = document.createElement('button');
        noteButton.className = 'note-button';
        noteButton.innerHTML = '📝';
        noteButton.title = 'Notiz hinzufügen/bearbeiten';
        noteButton.onclick = (e) => {
            e.stopPropagation();
            showNoteDialog(item);
        };

        // Notiz-Vorschau
        if (item.notes) {
            const notePreview = document.createElement('div');
            notePreview.className = 'note-preview';
            notePreview.textContent = item.notes;
            itemContent.appendChild(notePreview);
        }

        listItem.appendChild(itemContent);
        listItem.appendChild(noteButton);
        list.appendChild(listItem);
    });

    return list;
}

// Funktion zum Erstellen der Fortschrittsanzeige
function createProgressBar(section) {
    if (!section.items && !section.subsections) return null;

    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progress = calculateSectionProgress(section);
    progressBar.style.width = `${progress}%`;

    const progressText = document.createElement('span');
    progressText.className = 'progress-text';
    progressText.textContent = `${Math.round(progress)}% abgeschlossen`;

    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);

    return progressContainer;
}

// Funktion zur Berechnung des Fortschritts einer Sektion
function calculateSectionProgress(section) {
    let totalItems = 0;
    let checkedItems = 0;

    if (section.items) {
        totalItems += section.items.length;
        checkedItems += section.items.filter(item => item.ist_abgehakt).length;
    }

    if (section.subsections) {
        section.subsections.forEach(subsection => {
            if (subsection.items) {
                totalItems += subsection.items.length;
                checkedItems += subsection.items.filter(item => item.ist_abgehakt).length;
            }
        });
    }

    return totalItems === 0 ? 0 : (checkedItems / totalItems) * 100;
}

// Funktion zur Behandlung von Checkbox-Änderungen
function handleItemCheck(itemId) {
    // Finde das Item in den Daten und aktualisiere den Status
    updateItemStatus(diagramData.sections, itemId);
    // Speichere den aktualisierten Status
    saveChecklistStatus();
    // Aktualisiere die Anzeige
    renderDiagramCard();
}

// Rekursive Funktion zum Aktualisieren des Item-Status
function updateItemStatus(sections, itemId) {
    sections.forEach(section => {
        if (section.items) {
            const item = section.items.find(i => i.id === itemId);
            if (item) {
                item.ist_abgehakt = !item.ist_abgehakt;
            }
        }
        if (section.subsections) {
            section.subsections.forEach(subsection => {
                if (subsection.items) {
                    const item = subsection.items.find(i => i.id === itemId);
                    if (item) {
                        item.ist_abgehakt = !item.ist_abgehakt;
                    }
                }
            });
        }
    });
}

// Funktion zum Anzeigen des Notiz-Dialogs
function showNoteDialog(item) {
    const dialog = document.createElement('div');
    dialog.className = 'note-dialog';

    const noteContent = document.createElement('div');
    noteContent.className = 'note-content';

    const title = document.createElement('h3');
    title.textContent = item.title;

    const textarea = document.createElement('textarea');
    textarea.value = item.notes || '';
    textarea.placeholder = 'Notiz eingeben...';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'note-dialog-buttons';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Speichern';
    saveButton.onclick = () => {
        item.notes = textarea.value;
        saveChecklistStatus();
        renderDiagramCard();
        document.body.removeChild(dialog);
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Abbrechen';
    cancelButton.onclick = () => {
        document.body.removeChild(dialog);
    };

    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);

    noteContent.appendChild(title);
    noteContent.appendChild(textarea);
    noteContent.appendChild(buttonContainer);
    dialog.appendChild(noteContent);

    document.body.appendChild(dialog);
    textarea.focus();
}

// Event Listener für das Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM vollständig geladen");
    loadBVFData().catch(error => {
        console.error('Fehler beim Initialisieren der App:', error);
    });
});