const texts = [
    "Du hast nur noch einen Tag für eine EIA Abgabe, am selben Abend startet eine WG Party beim Freund. Entscheidest du dich für die <strong>ABGABE</strong> oder für die <strong>PARTY</strong>?", // <strong> macht den Text fett
    "Du hast dich für die Party entschieden. Trinkst du heute <strong>ALKOHOL</strong> oder nur <strong>COLA</strong>?",
    "Du landest mit einer Alkoholvergiftung im Krankenhaus und schaffst es nicht deine Abgabe rechtzeitig fertig zu machen!",
    "Du wirst als Spaßbremse bezeichnet, schaffst es aber noch die Abgabe hochzuladen, weil du nüchtern nach Hause kommst.",
    "Du möchtest die Abgabe machen. Benutzt du <strong>CHATGPT</strong> oder probierst du es <strong>ALLEINE</strong>?",
    "Du wurdest ERWISCHT und musst alle Aufgaben nochmal machen! CHATGPT ist verboten!",
    "Du hast die Aufgabe mit 1,0 bestanden!",
    'Keine korrekte Eingabe\nRefresh die Seite!'
];

const input = document.querySelector(".inputForm_field")
const output = document.getElementById("output");


output.innerHTML = texts[0];                                        // Standardtext vor jedem Event und Input anzeigen

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        let userInput = input.value.toLowerCase();                // toLowerCase ignoriert die Kleinschreibung
        input.value = ""

        switch (userInput) {
            case "party":                                       //case wird mit Input verglichen
                output.innerHTML = texts[1];                   //text aus dem array mit dem Index [1] wird aufgerufen
                break;                                        //beendet den Codefluss nachdem case Bedingung erfüllt wurde
            case "alkohol":
                output.innerHTML = texts[2];
                break;
            case "cola":
                output.innerHTML = texts[3]
                break;
            case "abgabe":
                output.innerHTML = texts[4];
                break;
            case "chatgpt":
                output.innerHTML = texts[5];
                break;
            case "alleine":
                output.innerHTML = texts[6];
                break;

            default:
                output.innerHTML = texts[texts.length - 1];    // der letzte Text im Array wird aufgerufen sobald eine Falsche Eingabe erfolgt - Zeile 9
        }
    }
});
