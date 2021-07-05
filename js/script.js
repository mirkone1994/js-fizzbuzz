/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/
/*var multiplesOf1 = [];
var multiplesOf3 = [];
var multiplesOf5 = [];*/
var result = "";
for (i=1; i<=100; i++){
    if (i % 1 === 0) {
        result = i;
    }
    if (i % 3 === 0) {
        result = "fizz";
    }
    if (i % 5 === 0) {
        result = "Buzz";
    } 
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    }
    console.log(result)
}
