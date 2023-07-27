//  Crie um programa que converta graus Celsius para Fahrenheit.

/*
Fórmula pra converter graus Celsius para Fahrenheit:
    F = (C * 1,8) + 32
*/

const prompt = require("prompt-sync")();
console.log("Conversor de Celsius para Fahrenheit...")
let entrada = prompt("Digite a temperatura em graus Celsius: ");
var teste = calcularFahrenheit();

function calcularFahrenheit() {
    var resultado = (entrada * 1.8) + 32;
    return resultado;
}

console.log(`A temperatura em °C é: ${teste}`);

// OK