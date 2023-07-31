// Crie um programa que inverta a ordem dos elementos em uma lista.

const prompt = require("prompt-sync")();
console.log("Programa que inverte a ordem dos elementos de uma lista...");

let lista = [];
console.log("Escreva algo para adicionar no início da lista. Digite fim para exibir a lista");

let elemento;
armazenarDados();
function armazenarDados() {
    while (elemento != "fim") {
        elemento = prompt("Digite algo: ").toLowerCase();
        if (elemento != "fim") {
            lista.unshift(elemento);
        };
    };
    console.log(`A lista de elementos é: ${lista}.`)
};

console.log("Fím do código...");

// OK