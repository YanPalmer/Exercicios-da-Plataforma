/*
Você deve criar três listas em JavaScript:


1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.


Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas
*/

const pessoas = ["Yan", "João", "Erick"];
const idades = [23, 27, 22];
const coresFavoritas = ["Verde", "Laranja", "Azul"];

console.log(`As pessoas: ${pessoas.join(", ")}\nTem as idades: ${idades.join(", ")}\ne gostam das cores: ${coresFavoritas.join(", ")}.`);
pessoas.splice(1, 1, "Elton");
idades.splice(1, 1, 22);
coresFavoritas.splice(1, 1, "Preto");
console.log();

console.log(`As pessoas: ${pessoas.join(", ")}\nTem as idades: ${idades.join(", ")}\ne gostam das cores: ${coresFavoritas.join(", ")}.`);