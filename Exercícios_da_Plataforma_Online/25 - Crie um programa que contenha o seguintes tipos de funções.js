/*
1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.
Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
*/
// 1.
function funcaoSemParametro() {
    return console.log("Uma função que retorna um texto qualquer");
}
funcaoSemParametro();


// 2.
function funcaoComParametros(valor1, valor2) {
    let soma = valor1 + valor2;
    return console.log(soma);
}
funcaoComParametros(2, 4);


// 3.
let x = 3;
let y = 2;
let soma = (x, y) => x + y;
console.log(soma(x, y));