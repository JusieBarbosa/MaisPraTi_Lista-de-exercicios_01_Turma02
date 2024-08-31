/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require('prompt-sync')();

let numero;

do {
    numero = parseInt(prompt("Digite um número:"));
    if (numero < 0){
        console.log("Numero Negativo")
        break;
    } else if(numero == 0){
        console.log("Par")
        break;
    }
    else if(numero %2 === 0){
        console.log("Par")
    }  else if( numero%2 !== 0) {
        console.log("Impar")
    }
} while (numero > 0)