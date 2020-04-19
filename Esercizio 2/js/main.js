// (2) Verifico attraverso una funzione se il numero passato dell’utente è pari o dispari 

//prima cosa, fare un prompt in cui chiedo all'utente di scrivere un numero
// poi faccio una funzione e distiguo il pari dal dispari con un if
// faccio un alert in cui comunico se il numero scelto è pari o dispari

var richiestaNumero = prompt("Inserisci un numero. Ti dirò se è pari o dispari!");

function numero (richiestaNumero) {
    if (richiestaNumero % 2 ==0) {
        return richiestaNumero = true;
    } 
}

numero(richiestaNumero);

if (numero(richiestaNumero) == true) {
    alert("Pari!");
} else {
    alert("Dispari!");
}