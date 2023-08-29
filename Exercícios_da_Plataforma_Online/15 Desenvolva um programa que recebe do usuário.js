/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido
*/

const prompt = require("prompt-sync")();

function obterAnoNascimento() {
    while (true) {
        try {
            const ano = parseInt(prompt("Digite o seu ano de nascimento entre (1922-2021): "));
            if (ano >= 1922 && ano <= 2021) {
                return ano;
            } else {
                console.log("Ano inserido é incorreto. Tente novamente.");
            }
        } catch (error) {
            console.log("Ano inválido. Digite um número válido.");
        }
    }
}

function main() {
    const nomeCompleto = prompt("Digite seu nome completo: ");
    const anoNascimento = obterAnoNascimento();

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    console.log(`Nome: ${nomeCompleto}`);
    console.log(`Sua idade no ano atual é: ${idade} anos`);
}

main();