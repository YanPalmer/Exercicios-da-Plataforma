// Crie um programa que imprima os números de 1 a 10 em ordem crescente.

const prompt = require("prompt-sync")();
console.log("Programa para imprimir números na ordem crescente...");
let array = [];
var numeros;
while (array.length < 10) {
    numeros = Number(prompt("Digite um número de 1 a 10: "));
    array.push(numeros);
}
array = array.sort((a, b) => a - b);
console.log(array);
console.log("Fim do código...");

// OK


// Resolução mais manual. Irei melhorar outro dia sem usar a ferramenta sort().
/*
const prompt = require("prompt-sync")();
let array = [];
// array.push(3);
// array.push(6);
// console.log(array.length, typeof(array[0]));
while (array.length < 10) {
    var numeros = Number(prompt("Digite um número de 1 a 10: "));
    array.push(numeros);
}
// console.log(array);
// console.log(array[0+1]);
var arrayCorreto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var valor;
for (let i = 0; array != arrayCorreto; i++) {
    if (array[i] > array[i+1]) {    // 3, 2, 1  |   2, 3, 1
        valor = array[i+1];         // 2        |   1
        array[i+1] = (array[i]);    // 3, 3, 1  |   2, 3, 3
        array[i] = valor;           // 2, 3, 1  |   2, 1, 3
    }
};
// 3, 2, 1
console.log(array);
console.log("Fim do código...");
*/

/* Exemplo raciocínio
    [6, 4, 5, 7, 8, 9, 10, 3, 2, 1]
Se 6 for menor que 4 (adicione o 6 no início do array principal)
    Se não (adicione o proximo valor no início do array principal)
=== Incremente mais 1 na posição do array. Ex array[i+1]



*/