/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Digite o peso: "));
let altura = parseFloat(prompt("Digite a altura: "));

let calculaImc = peso /(altura * altura)

if(calculaImc <= 18.4){
    console.log("Baixo peso");
} else if(calculaImc > 18.4 && calculaImc <= 24.9){
    console.log("Peso Normal");
} else if(calculaImc > 24.9 && calculaImc <= 29.9){
    console.log("Sobrepeso");
} else {
    console.log("Obesidade")
}