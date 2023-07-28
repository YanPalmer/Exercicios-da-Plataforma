// Escreva um programa que receba uma lista de números e imprima apenas os números pares.

const prompt = require("prompt-sync")();
console.log("Este é um programa que recebe uma lista de números e imprime apenas os valores PARES...");
let listaDeNumeros = [];

console.log("Digite a letra \"f\" para encerrar o código.");
receberValores();

var entrada;
function receberValores() {
    entrada = prompt("Digite um valor: ");
    if (entrada == "f") {
        imprimirPar();
    } else {
        listaDeNumeros.push(entrada);
        receberValores();
    }
};

function imprimirPar() {
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if (listaDeNumeros[i] % 2 === 0) {
            console.log(listaDeNumeros[i]);
        }
    };
    console.log("Fím do código...")
};

// OK