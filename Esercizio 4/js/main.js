// (4) L’utente sceglie pari o dispari e un numero  da 1 a 5.  Generiamo un numero random (sempre da 1 a 5) per il computer.  
// Sommiamo i due numeri e dichiariamo chi ha vinto. 

/* Prima cosa fare un prompt per chiedere un numero da 1 a 5 e uno per chiedere di scegliere tra pari e dispari
   Seconda cosa, generiamo un numero random per il pc
   Terza cosa sommare i due numeri, in base a cosa ha scelto l'utente, se è pari ha vinto/perso e idem se è dispari */

do {
   var numero = parseInt(prompt("Scegli un numero da 1 a 5!"));
} while (isNaN(numero));

do {
   var pariDispari = prompt("Scegli: pari o dispari?");
} while (pariDispari != "pari" && pariDispari != "dispari");


var numeroPc = Math.floor(Math.random() * 5) + 1;

console.log(numero, pariDispari, numeroPc);

var somma = numero + numeroPc;

console.log(somma);

function calcoloVincitore (pariDispari, somma) {
   if(pariDispari == "pari" && somma % 2 ==0) {
      alert("Hai vinto!");
   } else if(pariDispari == "dispari" && somma % 2 ==1) {
      alert("Hai vinto!");
   } else {
      alert("Hai perso!");
   }
}

calcoloVincitore(pariDispari, somma);

