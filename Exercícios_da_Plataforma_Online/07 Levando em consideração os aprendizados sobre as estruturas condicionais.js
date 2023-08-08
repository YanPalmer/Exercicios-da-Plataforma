/*  Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.

*/

console.log("Programa que identifica qual o meio de transporte que o usuário está usando...");
const prompt = require("prompt-sync")();

let terrestre;
let cabeUmaPessoa;
let ePesado;
let temPedal;
let usaCapacete;
iniciar();
function iniciar() {
    console.log("Responda com s para (sim) e n para (não):")
    terrestre = String(prompt("É terrestre?"));
    cabeUmaPessoa = String(prompt("Cabe apenas uma pessoa?"));
    ePesado = String(prompt("É pesado?"));
    temPedal = String(prompt("Tem pedal?"));
    usaCapacete = String(prompt("Usa capacete?"));
    verificar();
}

function verificar() {
    // Bicicleta
    if (terrestre == "s" && cabeUmaPessoa == "s" && ePesado == "n" && temPedal == "s" && usaCapacete == "n") {
        console.log(`Então o transporte escolhido foi a Bicicleta.`);
    } // Trator
    else if (terrestre == "s" && cabeUmaPessoa == "s" && ePesado == "s" && temPedal == "n" && usaCapacete == "n") {
        console.log(`Então o transporte escolhido foi o Trator.`);
    } // Moto
    else if (terrestre == "s" && cabeUmaPessoa == "n" && ePesado == "s" && temPedal == "n" && usaCapacete == "s") {
        console.log(`Então o transporte escolhido foi a Moto.`);
    } else {
        console.log("Você digitou algo errado. Tente novamente...");
        iniciar();
    };
};