/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')();

let numero;

numero = parseInt(prompt("Digite uma nota:"));

if(numero >= 0 && numero < 4 ) {
    console.log("Reprovado");
} else if(numero >= 4 && numero < 6){
    console.log("Recuperação");
} else if(numero >= 6 && numero <= 10){
    console.log("Aprovado")
} else if(numero < 0 || numero > 10){
    console.log("Nota inválida");
}