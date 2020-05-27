//myJavaScript
//somma listaNumeri
var somma = 0;

//Il software deve chiedere per 5 volte all’utente di inserire un numero.

for (var counter = 0; counter < 5; counter++) {
  var numero = parseInt(prompt("Scrivi una numero"));
    while (isNaN(numero)) {
      numero = prompt("Errore. Scrivi un numero");
    }
  console.log("numero " + numero + " + ");
  somma += numero;
}


//Il programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
alert(somma);
