// Escreva um programa que receba uma lista de números e retorne o maior e o menor valor.

const prompt = require("prompt-sync")();
console.log("Programa que retorna o maior e o menor valor entre uma lista de números...")
let listaNumerica = [];

console.log("Digite quaisquer números. Escreva \"f\" quando terminar");
let entrada;
receberLista();
function receberLista() {
    entrada = prompt("Digite um valor: ");
    if (entrada == "f") {
        console.log("Fim do código...");
        console.log(listaNumerica);
        retornarMaiorEMenorValor();
    } else {
        listaNumerica.push(parseInt(entrada));
        receberLista();
    };
};

function retornarMaiorEMenorValor() {
    let maiorValor = listaNumerica[0];
    let menorValor = listaNumerica[0];
    for (let i = 0; i < listaNumerica.length; i++) {
        if (listaNumerica[i] > maiorValor) {
            maiorValor = listaNumerica[i];
        }
        if (listaNumerica[i] < menorValor) {
            menorValor = listaNumerica[i];
        }
    };
    console.log(`O maior valor é: ${maiorValor}`);
    console.log(`O menor valor é: ${menorValor}`);
};

// Ok