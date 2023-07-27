// Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado.

const prompt = require("prompt-sync")();

console.log("Programa para somar dois valores...");
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let resultado = n1 + n2;

console.log(`A soma entre ${n1} e ${n2} é: ${resultado}`);

// OK