//Il software deve chiedere per 10 volte all’utente
//di inserire un numero. Il programma stampa 
//la somma di tutti i numeri inseriti.

let somma = 0;

let i=0;

while ( i < 10) {
   const numero = parseInt(prompt('Inserire numero'));

   if (isNaN(numero)) {
       numero = 0;
       alert('Valore inserito non valido = 0')
   }

    somma += numero

    i++;

    alert('Il subtotale vale: '+ somma);
}


