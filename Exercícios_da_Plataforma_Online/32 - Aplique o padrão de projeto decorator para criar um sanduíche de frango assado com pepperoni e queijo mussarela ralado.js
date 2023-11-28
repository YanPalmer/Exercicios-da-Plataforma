// Componente interface
class Sanduiche {
    getDescricao() {
        return 'Sanduíche';
    }

    getCusto() {
        return 0;
    }
}

// Componente concreto
class FrangoAssado extends Sanduiche {
    getDescricao() {
        return 'Frango Assado';
    }

    getCusto() {
        return 4.5;
    }
}

// Decorator concreto
class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ', Pepperoni';
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Decorator concreto
class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return this.sanduiche.getDescricao() + ', Queijo Mussarela Ralado';
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Cliente
const sanduicheFrangoAssado = new FrangoAssado();
const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(sanduicheFrangoAssado));

// Exibindo no console
console.log(`${sanduicheDecorado.getDescricao()} custa $${sanduicheDecorado.getCusto().toFixed(2)}`);
