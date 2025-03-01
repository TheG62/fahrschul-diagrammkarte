// Ausbildungsdiagrammkarte Datenstruktur
const trainingDiagramData = {
    notes_version: "1.0",
    title: "Ausbildungsdiagrammkarte",
    description: "Basierend auf dem Curriculum der Bundesvereinigung der Fahrschulen e.V. für die praktische Ausbildung von PKW-Fahrern. Dient der systematischen und sicheren Ausbildung unter Berücksichtigung energiesparender und umweltfreundlicher Fahrweise.",
    sections: [
        {
            id: "grundstufe",
            title: "Grundstufe",
            subsections: [
                {
                    id: "einweisung",
                    title: "Einweisung und Bedienung",
                    items: [
                        { id: "einsteigen", title: "Besonderheiten beim Einsteigen", ist_abgehakt: false, notes: "" },
                        { id: "einstellen", title: "Einstellen", ist_abgehakt: false },
                        { id: "sitz", title: "Sitz", ist_abgehakt: false },
                        { id: "spiegel", title: "Spiegel", ist_abgehakt: false },
                        { id: "lenkrad", title: "Lenkrad", ist_abgehakt: false },
                        { id: "kopfstuetze", title: "Kopfstütze", ist_abgehakt: false },
                        { id: "lenkradhaltung", title: "Lenkradhaltung", ist_abgehakt: false },
                        { id: "pedale", title: "Pedale", ist_abgehakt: false },
                        { id: "gurt", title: "Gurt anlegen/anpassen", ist_abgehakt: false },
                        { id: "schalthebel", title: "Schalt-/Wählhebel", ist_abgehakt: false },
                        { id: "zuendschloss", title: "Zündschloss", ist_abgehakt: false },
                        { id: "motor", title: "Motor anlassen", ist_abgehakt: false },
                        { id: "anfahruebungen", title: "Anfahr-/Anhalteübungen", ist_abgehakt: false },
                        { id: "schaltungen", title: "Schaltungen", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "aufbaustufe",
            title: "Aufbaustufe",
            subsections: [
                {
                    id: "umweltfreundlich",
                    title: "Umweltfreundliches, vorausschauendes Fahren, Blickschulung",
                    items: [
                        { id: "rollen", title: "Rollen und Schalten", ist_abgehakt: false },
                        { id: "abbremsen", title: "Abbremsen und Schalten", ist_abgehakt: false },
                        { id: "bremsungen", title: "Bremsungen", ist_abgehakt: false },
                        { id: "gefahrsituationen", title: "Gefahrsituationen", ist_abgehakt: false },
                        { id: "gefaelle", title: "Gefälle", ist_abgehakt: false },
                        { id: "steigung", title: "Steigung", ist_abgehakt: false },
                        { id: "anhalten", title: "Anhalten", ist_abgehakt: false },
                        { id: "anfahren", title: "Anfahren", ist_abgehakt: false },
                        { id: "rueckwaerts", title: "Rückwärts", ist_abgehakt: false },
                        { id: "sichern", title: "Sichern", ist_abgehakt: false },
                        { id: "schalten", title: "Schalten", ist_abgehakt: false },
                        { id: "tastgeschwindigkeit", title: "Tastgeschwindigkeit", ist_abgehakt: false },
                        { id: "bedienung", title: "Bedienungs- + Kontrollerichtungen", ist_abgehakt: false },
                        { id: "besonderheiten", title: "Örtliche Besonderheiten", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "leistungsstufe",
            title: "Leistungsstufe",
            subsections: [
                {
                    id: "schwierig",
                    title: "Schwierige Verkehrssituationen, umweltschonendes, vorausschauendes Fahren",
                    items: [
                        { id: "fahrbahnnutzung", title: "Fahrbahnnutzung", ist_abgehakt: false },
                        { id: "einordnen", title: "Einordnen", ist_abgehakt: false },
                        { id: "markierungen", title: "Markierungen", ist_abgehakt: false },
                        { id: "fahrstreifenwechsel", title: "Fahrstreifenwechsel", ist_abgehakt: false },
                        { id: "vorbeifahren", title: "Vorbeifahren/Überholen", ist_abgehakt: false },
                        { id: "abbiegen", title: "Abbiegen", ist_abgehakt: false },
                        { id: "vorfahrt", title: "Vorfahrt", ist_abgehakt: false },
                        { id: "strassenbahnen", title: "Straßenbahnen", ist_abgehakt: false },
                        { id: "einbahnstrassen", title: "Einbahnstraßen", ist_abgehakt: false },
                        { id: "verkehrszeichen", title: "Verkehrszeichen", ist_abgehakt: false },
                        { id: "geschwindigkeit", title: "Geschwindigkeit/Abstand", ist_abgehakt: false },
                        { id: "verkehrsteilnehmer", title: "Verkehrsteilnehmer", ist_abgehakt: false },
                        { id: "verkehrsfuehrung", title: "Schwierige Verkehrsführung", ist_abgehakt: false },
                        { id: "kreisverkehr", title: "Kreisverkehr", ist_abgehakt: false },
                        { id: "bahnuebergang", title: "Bahnübergang", ist_abgehakt: false },
                        { id: "kritisch", title: "Kritische Verkehrssituationen", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "grundfahraufgaben",
            title: "Grundfahraufgaben",
            description: "Klasse B - Insgesamt 3 Grundfahraufgaben sind zu absolvieren",
            subsections: [
                {
                    id: "rueckwaerts_einmuendung",
                    title: "2.1 - Fahren nach rechts rückwärts",
                    description: "Nach rechts rückwärts in einem engen Bogen fahren, ohne auf den Bordstein aufzufahren oder die Fahrbahnbegrenzung zu überfahren. Fahrzeug parallel zum Bordstein oder zur Fahrbahnbegrenzung anhalten.",
                    selection_group: "gruppe_1",
                    items: [
                        { id: "rueckwaerts_rechts", title: "Einmündung/Kreuzung rechts", ist_abgehakt: false }
                    ]
                },
                {
                    id: "laengsparken",
                    title: "2.2 - Rückwärts in Parklücke (Längsaufstellung)",
                    description: "Rückwärts fahren in eine etwa 8 m lange Lücke zwischen zwei hintereinander stehenden Fahrzeugen und halten.",
                    selection_group: "gruppe_1",
                    items: [
                        { id: "laengsparken_rechts", title: "Längsparken rechts", ist_abgehakt: false },
                        { id: "laengsparken_links", title: "Längsparken links (Einbahnstraße)", ist_abgehakt: false }
                    ]
                },
                {
                    id: "querparken",
                    title: "2.3 - Parken (Quer- oder Schrägaufstellung)",
                    description: "Ein- und Ausparken in Quer- oder Schrägaufstellung.",
                    selection_group: "gruppe_2",
                    items: [
                        { id: "querparken_rueck_rechts", title: "Rückwärts rechts einparken", ist_abgehakt: false },
                        { id: "querparken_rueck_links", title: "Rückwärts links einparken", ist_abgehakt: false },
                        { id: "querparken_vor_rechts", title: "Vorwärts rechts einparken", ist_abgehakt: false },
                        { id: "querparken_vor_links", title: "Vorwärts links einparken", ist_abgehakt: false },
                        { id: "querparken_ausparken", title: "Ausparken aus Queraufstellung", ist_abgehakt: false }
                    ]
                },
                {
                    id: "umkehren",
                    title: "2.4 - Umkehren",
                    description: "Selbständiges Auswählen einer geeigneten Stelle und Methode zum Umkehren (z.B. Park- oder Stellplatz, Einmündung).",
                    items: [
                        { id: "umkehren_selbststaendig", title: "Umkehren nach eigener Methodenwahl", ist_abgehakt: false }
                    ]
                },
                {
                    id: "gefahrbremsung",
                    title: "2.5 - Abbremsen mit höchstmöglicher Verzögerung",
                    description: "Vollbremsung aus einer Geschwindigkeit von ca. 30 km/h zum Stillstand (Gefahrbremsung). Pflichtaufgabe.",
                    is_mandatory: true,
                    items: [
                        { id: "gefahrbremsung_30", title: "Gefahrbremsung aus 30 km/h", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "reifestufe",
            title: "Reife- und Teststufe",
            description: "Completion of training, exam preparation",
            subsections: [
                {
                    id: "selbststaendig",
                    title: "Selbstständiges Fahren",
                    items: [
                        { id: "innerorts", title: "Innerorts", ist_abgehakt: false },
                        { id: "ausserorts", title: "Außerorts", ist_abgehakt: false }
                    ]
                },
                {
                    id: "verantwortung",
                    title: "Verantwortungsbewusstes Fahren",
                    items: [
                        { id: "verkehrsregeln", title: "Verkehrsregeln beachten", ist_abgehakt: false },
                        { id: "ruecksicht", title: "Rücksichtnahme auf andere", ist_abgehakt: false },
                        { id: "vorausschauend", title: "Vorausschauendes Fahren", ist_abgehakt: false },
                        { id: "gefahren", title: "Gefahren erkennen", ist_abgehakt: false },
                        { id: "umweltbewusst", title: "Umweltbewusstes Fahren", ist_abgehakt: false }
                    ]
                },
                {
                    id: "testfahrt",
                    title: "Testfahrt unter Prüfungsbedingungen",
                    items: [
                        { id: "fakt", title: "FAKT", ist_abgehakt: false },
                        { id: "andere", title: "Andere", ist_abgehakt: false }
                    ]
                },
                {
                    id: "wiederholung",
                    title: "Wiederholung/Vertiefung",
                    items: [
                        { id: "grundstufe_wdh", title: "Grundstufe wiederholen", ist_abgehakt: false },
                        { id: "aufbaustufe_wdh", title: "Aufbaustufe wiederholen", ist_abgehakt: false },
                        { id: "leistungsstufe_wdh", title: "Leistungsstufe wiederholen", ist_abgehakt: false },
                        { id: "grundfahraufgaben_wdh", title: "Grundfahraufgaben wiederholen", ist_abgehakt: false },
                        { id: "sonderfahrten_wdh", title: "Sonderfahrten wiederholen", ist_abgehakt: false }
                    ]
                },
                {
                    id: "leistungsbewertung",
                    title: "Leistungsbewertung",
                    items: [
                        { id: "selbsteinschaetzung", title: "Selbsteinschätzung", ist_abgehakt: false },
                        { id: "fahrlehrerbeurteilung", title: "Beurteilung durch Fahrlehrer", ist_abgehakt: false },
                        { id: "pruefungsreife", title: "Prüfungsreife", ist_abgehakt: false },
                        { id: "schwaechen", title: "Schwächen identifiziert", ist_abgehakt: false },
                        { id: "verbesserungen", title: "Verbesserungen umgesetzt", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "sonderfahrten",
            title: "Besondere Ausbildungsfahrten",
            description: "Safe and environmentally friendly driving at higher speeds on country roads, motorways and at night",
            subsections: [
                {
                    id: "ueberlandfahrt",
                    title: "Überlandfahrten",
                    items: [
                        { id: "geschwindigkeit_gang", title: "Angepasste Geschwindigkeit/Gangwahl", ist_abgehakt: false },
                        { id: "abstand_land", title: "Abstand", ist_abgehakt: false },
                        { id: "beobachtung_spiegel", title: "Beobachtung/Spiegel", ist_abgehakt: false },
                        { id: "kreuzungen", title: "Kreuzungen/Einmündungen", ist_abgehakt: false },
                        { id: "kurven", title: "Kurven", ist_abgehakt: false },
                        { id: "steigungen_land", title: "Steigungen", ist_abgehakt: false },
                        { id: "gefaelle_land", title: "Gefälle", ist_abgehakt: false },
                        { id: "alleen", title: "Alleen", ist_abgehakt: false },
                        { id: "besondere_situationen_land", title: "Besondere Situationen", ist_abgehakt: false },
                        { id: "liegenbleiben", title: "Liegenbleiben + Absichern", ist_abgehakt: false },
                        { id: "fussgaenger_land", title: "Fußgänger", ist_abgehakt: false },
                        { id: "wild", title: "Wild/Tiere", ist_abgehakt: false },
                        { id: "besondere_anforderungen_land", title: "Besondere Anforderungen", ist_abgehakt: false },
                        { id: "leistungsgrenze_land", title: "Leistungsgrenze", ist_abgehakt: false },
                        { id: "ablenkung_land", title: "Ablenkung", ist_abgehakt: false }
                    ]
                },
                {
                    id: "autobahn",
                    title: "Autobahn",
                    items: [
                        { id: "fahrplanung", title: "Fahrplanung", ist_abgehakt: false },
                        { id: "einfahren", title: "Einfahren in BAB", ist_abgehakt: false },
                        { id: "fahrstreifenwahl", title: "Fahrstreifenwahl", ist_abgehakt: false },
                        { id: "geschwindigkeitswahl", title: "Geschwindigkeitswahl", ist_abgehakt: false },
                        { id: "abstand_bab", title: "Abstand", ist_abgehakt: false },
                        { id: "ueberholen", title: "Überholen", ist_abgehakt: false },
                        { id: "schilder_markierungen", title: "Schilder/Markierungen", ist_abgehakt: false },
                        { id: "vorbeifahren_anschluss", title: "Vorbeifahren/Anschlussstellen", ist_abgehakt: false },
                        { id: "rastplaetze", title: "Rast-/Parkplätze, Tankstellen", ist_abgehakt: false },
                        { id: "unfaelle", title: "Verhalten bei Unfällen", ist_abgehakt: false },
                        { id: "dichter_verkehr", title: "Dichter Verkehr/Stau", ist_abgehakt: false },
                        { id: "besondere_situationen_bab", title: "Besondere Situationen", ist_abgehakt: false },
                        { id: "besondere_anforderungen_bab", title: "Besondere Anforderungen", ist_abgehakt: false },
                        { id: "leistungsgrenze_bab", title: "Leistungsgrenze", ist_abgehakt: false },
                        { id: "konfliktsituationen", title: "Konfliktsituationen", ist_abgehakt: false },
                        { id: "ablenkung_bab", title: "Ablenkung", ist_abgehakt: false },
                        { id: "verlassen_bab", title: "Verlassen der BAB", ist_abgehakt: false },
                        { id: "orientierung_bab", title: "Orientierung", ist_abgehakt: false }
                    ]
                },
                {
                    id: "nachtfahrt",
                    title: "Dämmerung/Dunkelheit",
                    items: [
                        { id: "beleuchtung_kontrolle", title: "Kontrollieren/Einschalten der Beleuchtungseinrichtungen", ist_abgehakt: false },
                        { id: "beleuchtung", title: "Beleuchtung", ist_abgehakt: false },
                        { id: "beleuchtete_strassen", title: "Beleuchtete Straßen", ist_abgehakt: false },
                        { id: "unbeleuchtete_strassen", title: "Unbeleuchtete Straßen", ist_abgehakt: false },
                        { id: "parken_nacht", title: "Parken", ist_abgehakt: false },
                        { id: "schlechte_witterung", title: "Schlechte Witterung", ist_abgehakt: false },
                        { id: "tiere_nacht", title: "Tiere", ist_abgehakt: false },
                        { id: "bahnuebergaenge_nacht", title: "Bahnübergänge", ist_abgehakt: false },
                        { id: "unbeleuchtete_verkehrsteilnehmer", title: "Unbeleuchtete Verkehrsteilnehmer", ist_abgehakt: false },
                        { id: "blendung", title: "Blendung", ist_abgehakt: false },
                        { id: "orientierung_nacht", title: "Orientierung", ist_abgehakt: false }
                    ]
                }
            ]
        },
        {
            id: "situative_bausteine",
            title: "Situative Bausteine",
            subsections: [
                {
                    id: "fahrtechnische_vorbereitung",
                    title: "Checkliste zur Fahrtechnischen Vorbereitung",
            items: [
                { id: "reifen", title: "Reifen (z.B. Beschädigungen, Profiltiefe, Reifendruck)", ist_abgehakt: false },
                { id: "scheinwerfer", title: "Scheinwerfer, Leuchten, Blinker, Hupe", ist_abgehakt: false },
                { id: "standlicht", title: "Standlicht", ist_abgehakt: false },
                { id: "fernlicht", title: "Fernlicht", ist_abgehakt: false },
                { id: "abblendlicht", title: "Abblendlicht", ist_abgehakt: false },
                { id: "schlussleuchten", title: "Schlussleuchten m. Kennzeichenbeleuchtung", ist_abgehakt: false },
                { id: "nebelschlussleuchte", title: "Nebelschlussleuchte", ist_abgehakt: false },
                { id: "warnblinkanlage", title: "Warnblinkanlage", ist_abgehakt: false },
                { id: "blinker", title: "Blinker", ist_abgehakt: false },
                { id: "bremsleuchte", title: "Bremsleuchte", ist_abgehakt: false },
                { id: "hupe", title: "Hupe", ist_abgehakt: false },
                { id: "rueckstrahler", title: "Rückstrahler", ist_abgehakt: false },
                { id: "lenkung", title: "Lenkung", ist_abgehakt: false },
                { id: "betriebsbremse", title: "Betriebsbremse", ist_abgehakt: false },
                { id: "feststellbremse", title: "Feststellbremse", ist_abgehakt: false },
                { id: "motoroel", title: "Motoröl", ist_abgehakt: false },
                { id: "kuehlmittel", title: "Kühlmittel", ist_abgehakt: false },
                { id: "scheibenwaschflussigkeit", title: "Scheibenwaschflüssigkeit", ist_abgehakt: false },
                { id: "warndreieck", title: "Warndreieck", ist_abgehakt: false },
                { id: "verbandskasten", title: "Verbandskasten", ist_abgehakt: false },
                { id: "bordwerkzeug", title: "Bordwerkzeug", ist_abgehakt: false },
                { id: "scheiben_wischer", title: "Scheiben/Wischer", ist_abgehakt: false },
                { id: "spiegel", title: "Spiegel", ist_abgehakt: false },
                { id: "kennzeichen", title: "Kennzeichen(HU/AU)", ist_abgehakt: false },
                { id: "beleuchtung_aussen", title: "Beleuchtung", ist_abgehakt: false },
                { id: "sicherung_ladung", title: "Sicherung", ist_abgehakt: false },
                { id: "kennzeichnung_ladung", title: "Kenntlichmachung", ist_abgehakt: false },
                { id: "lueftung_wetter", title: "Lüftung", ist_abgehakt: false },
                { id: "beleuchtung_wetter", title: "Beleuchtung", ist_abgehakt: false },
                { id: "scheibenwischer_wascher", title: "Scheibenwischer/-wascher", ist_abgehakt: false },
                { id: "regen_spruehnebel", title: "Regen, Sprühnebel", ist_abgehakt: false },
                { id: "wasserlachen", title: "Wasserlachen, Aquaplaning", ist_abgehakt: false },
                { id: "wind_sturm", title: "Wind, Sturm, Böen", ist_abgehakt: false },
                { id: "schnee_matsch", title: "Schnee und Matsch", ist_abgehakt: false },
                { id: "eis", title: "Eis", ist_abgehakt: false }
            ]
                }
            ]
        }
    ]
};

export default trainingDiagramData;