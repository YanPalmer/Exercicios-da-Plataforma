// Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número e o usuário tenta adivinhar.

const prompt = require("prompt-sync")();
console.log("Jogo de adivinhação...");
console.log("Adivinhe um número de 1 a 10, se ganhar você terá muita sorte na vida!");

/*let numeroAleatorio1 = Math.floor(Math.random() * 10 + 1);*/     // Arredonda um número para baixo até o múltiplo inteiro mais próximo de significância especificada

let numeroAleatorio2 = Math.round(Math.random() * 10 + 1);    // Arredonda para o inteiro mair próximo

let resposta;
verificarNumero();
function verificarNumero() {
    while (resposta != numeroAleatorio2) {
        resposta = prompt("Digite o número: ");
        if (resposta != numeroAleatorio2) {
            console.log("Desista!");
        };
    };
    console.log("Como você conseguiu??!");
}
;

// console.log(numeroAleatorio, numeroAleatorio2);

// OK