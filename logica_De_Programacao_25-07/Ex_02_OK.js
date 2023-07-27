// Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido.

const prompt = require("prompt-sync")();
var nome = prompt("Digite o seu nome: ");
console.log(`Olá ${nome}! Seja bem vindo ao mundo.`)

// OK