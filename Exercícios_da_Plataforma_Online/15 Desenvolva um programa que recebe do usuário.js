/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido
*/

const prompt = require("prompt-sync")();



// if (anoDeNascimento == 2021) {
//     console.log(`Olá ${nomeCompleto}!\nVocê nasceu no ano: ${anoDeNascimento}`);
// }

try {
    const nomeCompleto = prompt("Digite o seu nome completo: ");
    const anoDeNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
    if (anoDeNascimento >= 1922 && anoDeNascimento <= 2021) {
        console.log(`Olá ${nomeCompleto}!\nVocê nasceu no ano: ${anoDeNascimento}`);
    }
} catch (error) {
    console.error("Erro encontrado: ", error);
    console.log("Erro encontrauu: ", error);
}
