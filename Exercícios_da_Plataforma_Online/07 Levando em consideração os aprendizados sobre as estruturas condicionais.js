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

let escolha;
iniciar();
function iniciar() {
    escolha = Number(prompt("Digite\n- 1 para Trator\n- 2 para Moto\n- 3 para Bicicleta: "));
};

let resultado;
switch (escolha) {
    case 1:
        resultado = "Trator";
        descobrir();
        break;
    case 2:
        resultado = "Moto";
        descobrir();
        break;
    case 3:
        resultado = "Bicicleta";
        descobrir();
        break;
    default:
        console.log("Algo errado, tente novamente:");
        iniciar();
        break;
}

let escolha2;
function descobrir() {
    console.log("Responda com s(sim) e n(não) ");
    escolha2 = prompt("É terrestre?");
    if (escolha2 == "s") {
        escolha2 = prompt("Cabe apenas uma pessoa?");
        if (escolha2 == "s") {
            escolha2 = prompt("É pesado?");
            if (escolha2 == "s") {
                console.log(`O valor escolhido ${escolha} é ${escolha2}`)
            }
        } else {
            escolha2 = prompt("Tem pedal?");
            if (escolha2 == "s") {
                console.log(`O valor escolhido ${escolha} é ${escolha2}`);
            }
        }
    } else {
        escolha2 = prompt("Usa capaçete?");
        if (escolha2 == "s") {
            console.log(`O valor escolhido ${escolha} é ${escolha2}`);
        }
    }
}