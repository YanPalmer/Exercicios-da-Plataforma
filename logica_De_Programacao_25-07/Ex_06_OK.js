// Escreva um programa que calcule a média de três números informados pelo usuário.

const prompt = require("prompt-sync")();
console.log("Programa para calcular a média de três números...");
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));
let media = (n1 + n2 + n3) / 3;

console.log(`A média dos números ${n1}, ${n2} e ${n3} é: ${media}`);

// OK