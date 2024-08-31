/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    controle if-else.*/

const prompt = require('prompt-sync')();

let numero;

numero = parseInt(prompt("Digite um número:"));

if(numero >= 0 && numero < 12) {
    console.log("Criança");
} else if(numero >= 12 && numero < 18){
    console.log("Adolescente");
} else if(numero >= 18 && numero < 60){
    console.log("Adulto");
} else if(numero >= 60 ){
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}
    