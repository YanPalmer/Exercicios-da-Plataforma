// Faça um programa que imprima os números pares de 1 a 20.

const prompt = require("prompt-sync")();

console.log("Programa que imprime os números pares de 1 a 20 iniciado...");

console.log("Aqui estão os números pares: ")
var novaEntrada = 20;
verificarPar();
function verificarPar() {
    for (let i = 1; i <= novaEntrada; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    };
    executarNovamente();
};
function executarNovamente() {
    console.log("Gostaria de ver de novo?");
    let entrada = prompt("Digite y(yes) ou n(no): ");
    if (entrada == "y") {
        novaEntrada = prompt("Digite uma nova entrada: ");
        verificarPar();
    }
};

// OK