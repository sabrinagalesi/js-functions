// (4) L’utente sceglie pari o dispari e un numero  da 1 a 5.  Generiamo un numero random (sempre da 1 a 5) per il computer.  
// Sommiamo i due numeri e dichiariamo chi ha vinto. 

/* Prima cosa fare un prompt per chiedere un numero da 1 a 5 e uno per chiedere di scegliere tra pari e dispari
   Seconda cosa, generiamo un numero random per il pc
   Terza cosa sommare i due numeri, in base a cosa ha scelto l'utente, se è pari ha vinto/perso e idem se è dispari */

var numero = parseInt(prompt("Scegli un numero da 1 a 5!"));
var pariDispari = prompt("Scegli: pari o dispari?");
var numeroPc = Math.floor(Math.random() * 5) + 1;

console.log(numero, pariDispari, numeroPc);

var somma = numero + numeroPc;

console.log(somma);

