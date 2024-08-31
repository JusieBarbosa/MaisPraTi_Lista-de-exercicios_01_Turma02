/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Insira o primeiro número:"));

let fatorial = 1; 

let soma = 0;

for (let i = numero; i > 0 ; i-- ) {
    fatorial = fatorial * i
    
    
}

console.log(fatorial)