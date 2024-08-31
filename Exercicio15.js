/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let sequencia = [0,1]


for(let i = 0; i <8; i++){
    let formulaFibonacci = sequencia[i] + sequencia[(i + 1)];
     sequencia.push(formulaFibonacci);
    
}

console.log(sequencia)
    