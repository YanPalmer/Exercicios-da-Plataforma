/*
Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.


Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.
*/

const prompt = require("prompt-sync")();

console.log("Programa que cria uma atabuada com o número digitado...");
let numero = prompt("Digite um número: ");

console.log(`Aqui está a tabuada de: ${numero}.`);
tabuada();

function tabuada() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    };
};