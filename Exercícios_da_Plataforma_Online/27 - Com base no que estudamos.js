// Objeto Material: Carro
let carro = {
    cor: 'azul',
    modelo: 'sedan',
    ano: 2022,
    acelerar: function () {
        console.log('O carro está acelerando.');
    },
    frear: function () {
        console.log('O carro está freando.');
    },
    ligarFarol: function () {
        console.log('Os faróis do carro estão ligados.');
    }
};

// Objeto Material: Livro
let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    abrir: function () {
        console.log('O livro foi aberto.');
    },
    fechar: function () {
        console.log('O livro foi fechado.');
    },
    virarPagina: function () {
        console.log('Virando a próxima página.');
    }
};

// Objeto Abstrato: Conta Bancária
let contaBancaria = {
    saldo: 1000,
    titular: 'João Silva',
    numeroConta: '12345',
    depositar: function (valor) {
        this.saldo += valor;
        console.log('Depósito realizado. Novo saldo: ' + this.saldo);
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log('Saque realizado. Novo saldo: ' + this.saldo);
        } else {
            console.log('Saldo insuficiente para realizar o saque.');
        }
    },
    consultarSaldo: function () {
        console.log('Saldo atual: ' + this.saldo);
    }
};

// Objeto Abstrato: Calculadora
let calculadora = {
    resultado: 0,
    somar: function (a, b) {
        this.resultado = a + b;
        console.log('A soma é: ' + this.resultado);
    },
    subtrair: function (a, b) {
        this.resultado = a - b;
        console.log('A subtração é: ' + this.resultado);
    },
    multiplicar: function (a, b) {
        this.resultado = a * b;
        console.log('A multiplicação é: ' + this.resultado);
    }
};

// Exemplos de uso
carro.acelerar();
livro.abrir();
contaBancaria.depositar(500);
calculadora.somar(5, 3);
