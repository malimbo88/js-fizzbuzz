//myJavaScript

//L’utente inserisce la prima parola
var parolaPrima = prompt("Scrivi una parola");
//Validazione Prima parola
while (parolaPrima.length === 0 || !isNaN(parolaPrima)) {
  parolaPrima = prompt("Errore. Scrivi una parola");
}

//L’utente inserisce la prima parola
var parolaSeconda = prompt("Scrivi un'altra parola");
//Validazione seconda parola
while (parolaSeconda.length === 0 || !isNaN(parolaSeconda)) {
  parolaSeconda = prompt("Errore. Scrivi una parola");
}

//Messaggio
var messaggio = "Le due parole hanno la stessa lunghezza"


//Il software stampa prima la parola più corta, poi la parola più lunga.
if (parolaPrima.length < parolaSeconda.length) {
  messaggio = "La prima parola é piu corta"
  console.log(parolaPrima)
} else if (parolaPrima.length > parolaSeconda.length) {
  messaggio = "La seconda parola é piu corta"
  console.log(parolaSeconda)
}
