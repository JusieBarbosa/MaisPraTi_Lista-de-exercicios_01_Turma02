/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Insira o primeiro número:"));

for (let i = 1; i <= 10; i++) {
    let tabuada;
    tabuada = i * numero;
    console.log(tabuada)
}