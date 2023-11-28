// Interface alvo
class Galinha {
    cacarejar() {
        console.log('Cocoricó!');
    }

    botarOvo() {
        console.log('Galinha botou um ovo.');
    }
}

// Adaptee (objeto existente que queremos adaptar)
class Pato {
    grasnar() {
        console.log('Quack!');
    }

    voar() {
        console.log('Pato voando.');
    }
}

// Adaptador
class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    cacarejar() {
        this.pato.grasnar(); // Adaptando o método cacarejar para usar o grasnar do pato
    }

    botarOvo() {
        this.pato.voar(); // Adaptando o método botarOvo para usar o voar do pato
    }
}

// Cliente
class AdaptadorPatoDemo {
    static executar() {
        const pato = new Pato();
        const adaptador = new AdaptadorPato(pato);

        console.log('Pato fazendo barulho como Galinha:');
        adaptador.cacarejar();

        console.log('\nPato botando ovo como Galinha:');
        adaptador.botarOvo();
    }
}

// Executando a demonstração
AdaptadorPatoDemo.executar();
