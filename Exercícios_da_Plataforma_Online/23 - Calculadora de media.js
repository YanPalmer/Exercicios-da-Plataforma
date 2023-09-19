// Calculadora de media

const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a nota1: "));
const nota2 = Number(prompt("Digite a nota2: "));
const nota3 = Number(prompt("Digite a nota3: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média do aluno é: ${media}`);