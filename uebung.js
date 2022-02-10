let beliebigerString = "Hallo"
let eineZahl = 2
let nocheineZahl = 5
let ergebnis = 3
let eineZahlmitKomma = 11.5
let grenze = 500


function rechenspiele() {
    ergebnis = eineZahl * nocheineZahl
    if (ergebnis > eineZahlmitKomma) {
        console.log(ergebnis - eineZahlmitKomma);
    } else {
        console.log("Das Ergebnis ist zu klein")
    }
}

function ungerade(ende) {
    for (let i = 1; i < ende ; i = i + 2 ) {
        console.log(i)
    }
}

function fibonacci() {

    for (let i = 1; i < grenze; i = )
}