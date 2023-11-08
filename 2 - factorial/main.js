// Crea un calcolatore di fattoriale (5 fattoriale = 5x4x3x2x1). L'utente deve poter inserire un numero, e al click di un bottone calcola, stampare il risultato del fattoriale di quel numero (è una funzione ricorsiva).

const inputNumber = 4;

const factorialCalculator = (num)=>{
    let temporaryMultiplier = (num-1);
    let temporaryResult = num * temporaryMultiplier;
    temporaryMultiplier--;
    if(temporaryMultiplier>0){
        factorialCalculator(temporaryResult);
    }
}
console.log(factorialCalculator(inputNumber));