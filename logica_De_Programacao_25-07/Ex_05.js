// Faça um programa que verifique se um número é par ou ímpar.

const prompt = require("prompt-sync")();

verificaParImpar();
function verificaParImpar() {
    console.log("Verificando se é PAR ou ÍMPAR...")
    let numero = Number(prompt("Digite um número: "));
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR`);
    } else if (numero % 2 == 1) {
        console.log(`O número ${numero} é IMPAR`);
    }
    else {
        console.log("O valor digitado não é um número!\nTente novamente...");
        return verificaParImpar();
    };
};
console.log("Fim do comando.")
var valor = prompt("Quer tentar novamente?\n y(yes) OR n(no): ");
if (valor == "y") {
    return verificaParImpar();
};

// OK