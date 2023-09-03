/*
Considere o array [3, 7, 9, 1, 0].


O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.


Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?
*/

class Queue {
    constructor() {
        this.lista = [3, 7, 9, 1, 0];
    }

    listar() {
        let novaLista = [];
        this.lista.forEach(item => {
            novaLista.push(item);
        });
        console.log(novaLista);
    }
    fila() {
        let novaFila = [];
        this.lista.forEach(item => {
            novaFila.push(item);
        });
        console.log(novaFila);
    }
    pilha() {
        let novaPilha = [];
        for (let i = 0; i < this.lista.length; i++) {
            // novaPilha = this.lista.pop(i);
        }
        console.log(novaPilha);
    }

}

const novoQueue = new Queue();
novoQueue.listar();
novoQueue.fila();
novoQueue.pilha();


