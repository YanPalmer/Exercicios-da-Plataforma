/*
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
*/

let animais = [
    ["Gato", "Mamífero", "12"],
    ["Cachorro", "Mamífero", "17"],
    ["Pinguim", "Ave", "4"]
];

// animais.forEach(lista => {
//     console.log(lista.join(", "));
//     // lista.forEach(item => {
//     //     console.log(item)
//     // })
// })

// OU

for (const item of animais) {
    console.log(item.join(", "));
}