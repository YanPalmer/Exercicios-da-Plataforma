/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0


O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.


Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.
*/

const prompt = require("prompt-sync")();

let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let votosBranco = 0;
let votosNulos = 0;

function exibirResultados() {
    console.log("Resultado da eleição:");
    console.log(`Candidato X: ${candidato_X} votos`);
    console.log(`Candidato Y: ${candidato_Y} votos`);
    console.log(`Candidato Z: ${candidato_Z} votos`);
    console.log(`Votos em branco: ${votosBranco}`);
    console.log(`Votos nulos: ${votosNulos}`);

    let vencedor = "";
    let maiorVotos = Math.max(candidato_X, candidato_Y, candidato_Z);

    if (maiorVotos === candidato_X) {
        vencedor = "Candidato X";
    } else if (maiorVotos === candidato_Y) {
        vencedor = "Candidato Y";
    } else if (maiorVotos === candidato_Z) {
        vencedor = "Candidato Z";
    } else {
        vencedor = "Nenhum vencedor";
    }

    console.log(`Vencedor: ${vencedor}`);
}

function votar(candidato) {
    switch (candidato) {
        case "X":
            candidato_X++;
            break;
        case "Y":
            candidato_Y++;
            break;
        case "Z":
            candidato_Z++;
            break;
        case "branco":
            votosBranco++;
            break;
        default:
            votosNulos++;
            break;
    }
}

while (true) {
    let voto = prompt("Digite o número do candidato (X, Y, Z) ou 'branco' para voto em branco. Digite 'sair' para finalizar a votação:");

    if (voto === "sair") {
        break;
    } else if (voto === "X" || voto === "Y" || voto === "Z" || voto === "branco") {
        votar(voto);
    } else {
        console.log("Voto inválido. Por favor, vote novamente.");
    }
}

exibirResultados();
