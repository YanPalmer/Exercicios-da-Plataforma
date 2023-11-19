class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {

  }

  represent() {
    return `Veículo: ${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  clone() {
    return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
  }

  represent() {
    return `${super.represent()}, Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
    super(modelo, marca, cor, numeroRodas);
    this.partidaEletrica = partidaEletrica;
  }

  clone() {
    return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.partidaEletrica);
  }

  represent() {
    return `${super.represent()}, Partida Elétrica: ${this.partidaEletrica ? 'Sim' : 'Não'}`;
  }
}

class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];

    veiculos.push(new Carro('Sedan', 'Toyota', 'Azul', 4, 4));
    veiculos.push(new Moto('Esportiva', 'Honda', 'Vermelha', 2, true));
    veiculos.push(new Carro('Hatchback', 'Ford', 'Preto', 4, 2));
    veiculos.push(new Moto('Custom', 'Harley-Davidson', 'Cinza', 2, false));
    veiculos.push(new Carro('SUV', 'Chevrolet', 'Branco', 4, 5));
    veiculos.push(new Moto('Naked', 'Yamaha', 'Amarela', 2, true));

    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    const veiculosClonados = [];
    for (const veiculo of veiculos) {
      veiculosClonados.push(veiculo.clone());
    }
    return veiculosClonados;
  }

  static imprimirRepresentacao(veiculos) {
    for (const veiculo of veiculos) {
      console.log(veiculo.represent());
    }
  }
}

const veiculosOriginais = Aplicacao.criarVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculosOriginais);
Aplicacao.imprimirRepresentacao(veiculosClonados);