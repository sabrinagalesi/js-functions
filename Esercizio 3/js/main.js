// (3) Una funzione per capire se la parola è palindroma 

/* 1 faccio un prompt in cui chiedo di scrivere una parola 
   2 faccio una funzione con dentro un for che mi conta le posizioni della parola in ordine decrescente
   3 if for è uguale alla parola digitata, allora è palindroma*/

var parola = prompt("Digita una parola. Ti dirò se è palindroma!");

console.log(parola);

var parolaInvertita = "";

function calcoloParola(parolaInvertita) {
    for (counter = parola.length - 1; counter >= 0; counter--) {
        parolaInvertita += parola[counter];
        console.log(parola[counter], counter, parolaInvertita);
    } 
    return parolaInvertita;
}

parolaInvertita = calcoloParola(parolaInvertita);

console.log(parolaInvertita);

if(parola == parolaInvertita) {
    alert("Palindroma!");
} else {
    alert("Non è palindroma!");
}

