// Crie um programa que receba a idade de uma pessoa e informa se ela é maior ou menor de idade.

const prompt = require("prompt-sync")();
verificarIdade();
function verificarIdade() {
    let idade = Number(prompt("Digite a sua idade: "));
    if (idade < 18) {
        console.log("Você é menor de idade. Cuidado!");
    } else if (idade >= 18) {
        console.log("Você já tem idade de saber o que é certo e errado. Previna-se!");
    } else {
        console.log("\nVocê digitou algum número?\nTente novamente...");
        return verificarIdade();
    };
}

// OK