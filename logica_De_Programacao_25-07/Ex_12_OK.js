// Faça um programa que verifique se uma palavra é um palíndromo (se pode ser lida da mesma forma de trás para frente).

const prompt = require("prompt-sync")();
console.log("Programa que verifica se uma palavra é palíndroma ou não...");
let entrada = prompt("Digite uma palavra qualquer: ").toLowerCase();    // Recebe um valor e o transforma em minúsculo

let letrasDaPalavra = [];
let letrasDaPalavraInverso = [];

// Ex: ovo & esse
separarPalavras();
function separarPalavras() {
    for (let i = 0; i < entrada.length; i++) {
        letrasDaPalavra.push(entrada[i]);
    };
};

separarPalavrasContrario();
function separarPalavrasContrario() {
    for (let j = entrada.length - 1; j >= 0; j--) {
        letrasDaPalavraInverso.push(entrada[j]);
    };
};

verificarPalindromo();
function verificarPalindromo() {
    letrasDaPalavra = letrasDaPalavra.join(""); // Junta as letras
    letrasDaPalavraInverso = letrasDaPalavraInverso.join("");   // Junta as letras
    if (letrasDaPalavra === letrasDaPalavraInverso) {
        console.log("A palavra inserida é um Palíndromo!");
    } else {
        console.log("A palavra inserida não é um Palíndromo!")
    };

    // console.log(letrasDaPalavra, letrasDaPalavraInverso);
};

// OK