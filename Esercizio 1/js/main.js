// (1) Genero 10 numeri random utilizzando una funzione 


function getRandom () {
    var numeroRandom = Math.floor(Math.random() * 20) + 1;
    console.log(numeroRandom);
}

for(counter= 1; counter <=10; counter++) {
    getRandom()
}