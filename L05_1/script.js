let entscheidung = prompt("Du hast nur noch einen Tag für eine EIA Abgabe, am selben Abend startet eine WG Party beim Freund. Entscheidest du dich für die ABGABE oder für die PARTY?", "ABGABE oder PARTY");

if (entscheidung == "Party" || entscheidung == 'party' || entscheidung == 'PARTY') { // Erste Entscheidung, unabhängig von der Groß- & Kleinschreibung

    let trinken = prompt("Du hast dich für die Party entschieden. Trinkst du heute ALKOHOL oder nur COLA?", "ALKOHOL oder COLA");
    if (trinken == "alkohol" || trinken == " Alkohol" || trinken == "ALKOHOL") { // Erste Entscheidung - nested if statement
        let krankenhaus = alert("Du landest mit einer Alkoholvergiftung im Krankenhaus und schaffst es nicht deine Abgabe rechtzeitig fertig zu machen!")
    }
    else if (trinken == "cola" || trinken == "Cola" || trinken == "COLA") { // (trinken.toLowerCase() === "cola") wäre auch eine Möglichkeit um die Schreibweise zu ignorieren.
        let spaßbremse = alert("Du wirst als Spaßbremse bezeichnet, schaffst es aber noch die Abgabe hochzuladen, weil du nüchtern nachhause kommst.")

    }
}


else if (entscheidung == "Abgabe" || entscheidung == "abgabe" || entscheidung == "ABGABE") { // Zweite Entscheidung, unabhängig von der Groß- & Kleinschreibung

    let aufgabe = prompt("Du möchtest die Abgabe machen. Benutzt du CHATGPT oder probierst du es ALLEINE?", "CHATGPT oder ALLEINE");
    if (aufgabe == "Chatgpt" || aufgabe == "chatgpt" || aufgabe == "CHATGPT") { // Zweite Entscheidung - nested if statement
        let betrug = alert("Du wurdest ERWISCHT und musst alle Aufgaben nochmal machen! CHATGPT ist verboten!")
    }
    else if (aufgabe == "Alleine" || aufgabe == "alleine" || aufgabe == "ALLEINE") {
        let bestanden = alert("Du hast die Aufgabe mit 1,0 bestanden!")
    }
}


else {
    alert('Keine korrekte Eingabe\nRefresh die Seite!');
} // benutze hier statt prompt ein alert da Ich den User zu einem Refresh zwingen will - mit /n erstellt man einen Zeilenumbruch
