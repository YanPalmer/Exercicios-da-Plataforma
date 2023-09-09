/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
*/

function buscaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;
    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        const valorMeio = array[meio];

        if (valorMeio === alvo) {
            return meio;
        } else if (valorMeio < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }
    return -1;
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const valorAlvo = 20;
const indice = buscaBinaria(array, valorAlvo);

if (indice !== -1) {
    console.log(`O valor ${valorAlvo} foi encontrado no índice ${indice}.`);
} else {
    console.log(`O valor ${valorAlvo} não foi encontrado no array.`);
}