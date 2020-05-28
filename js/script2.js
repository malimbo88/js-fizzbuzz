//myJavaScript

//FizzBuzz
var fizz = "Fizz";
var buzz = "Buzz";

//Stampa i numeri da 1 a 100.
var count = 1;
while (count <= 100) {
  //Variabile di appoggio numero
  var numero = count;

  //Per i numeri che sono sia multipli di 3 che di 5 stampa FizzBuzz.
  //Per i multipli di 3 stampi Buzz.
  //Per i multipli di 5 stampi Buzz.
  if(count % 3 === 0 && count % 5 === 0) {
    numero = fizz + buzz;
  }else if (count % 3 === 0 && count % 5 != 0) {
    numero = fizz;
  }else if(count % 5 === 0 && count % 3 != 0)
    numero = buzz;

  count++
  //Stampo i numeri.
  console.log(numero);
}
