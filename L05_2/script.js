let texts = [                                                            // Alle Texte in einem Array
    "Du hast nur noch einen Tag für eine EIA Abgabe, am selben Abend startet eine WG Party beim Freund. Entscheidest du dich für die ABGABE oder für die PARTY?",
    "Du hast dich für die Party entschieden. Trinkst du heute ALKOHOL oder nur COLA?",
    "Du landest mit einer Alkoholvergiftung im Krankenhaus und schaffst es nicht deine Abgabe rechtzeitig fertig zu machen!",
    "Du wirst als Spaßbremse bezeichnet, schaffst es aber noch die Abgabe hochzuladen, weil du nüchtern nach Hause kommst.",
    "Du möchtest die Abgabe machen. Benutzt du CHATGPT oder probierst du es ALLEINE?",
    "Du wurdest ERWISCHT und musst alle Aufgaben nochmal machen! CHATGPT ist verboten!",
    "Du hast die Aufgabe mit 1,0 bestanden!",
    'Keine korrekte Eingabe\nRefresh die Seite!'
];

function getDecision(message) {                                         // Erste Abfrage wird in Zeile 30 ausgeführt
    return prompt(message, "ABGABE oder PARTY").toLowerCase();          
}

function getDrinkDecision(message) {
    return prompt(message, "ALKOHOL oder COLA").toLowerCase();
}

function getTaskDecision(message) {
    return prompt(message, "CHATGPT oder ALLEINE").toLowerCase();
}

function showAlert(message) {
    alert(message);
}

let entscheidung = getDecision(texts[0]);               

if (entscheidung === "party") {                                         // getDecision Funktion wird ausgeführt - returned wird die Erste Abfrage mit dem ersten Index - Zeile 28
    let trinken = getDrinkDecision(texts[1]);
    if (trinken === "alkohol") {
        showAlert(texts[2]);
    } else if (trinken === "cola") {
        showAlert(texts[3]);
    }
} else if (entscheidung === "abgabe") {
    let aufgabe = getTaskDecision(texts[4]);
    if (aufgabe === "chatgpt") {
        showAlert(texts[5]);
    } else if (aufgabe === "alleine") {
        showAlert(texts[6]);
    }
} else {
    showAlert(texts[7]);                                               // benutze hier statt prompt ein alert da Ich den User zu einem Refresh zwingen will - mit /n erstellt man einen Zeilenumbruch
}
