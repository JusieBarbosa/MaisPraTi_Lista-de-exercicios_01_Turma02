/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Insira o número do exercício (1 a 3):"))

switch (numero) {
    case 1:
        console.log('Você escolheu a primeira opção')
    break;

    case 2:
        console.log("Você escolheu a segunda opção")
    break;

    case 3:
        console.log("Você escolheu a terceira opção")
    break;
}