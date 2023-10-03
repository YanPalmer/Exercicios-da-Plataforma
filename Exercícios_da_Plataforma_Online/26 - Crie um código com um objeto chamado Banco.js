/*
Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.
Sua atividade
Observações:
-buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
Documento
Imagem
- o número da conta deve retornar o número da conta.
Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

// function Banco(conta, saldo, tipoDeConta, agencia) {

// }

// const prompt = require("prompt-sync")();

function Banco(conta, saldo, tipoDeConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoDeConta = tipoDeConta;
    this.agencial = agencia;

    this.buscarSaldo = function buscarSaldo() {
        return console.log(`O seu saldo atual é ${this.saldo}`);
    }
    this.deposito = function deposito(valorDepositado) {
        if (valorDepositado) {
            const saldoFinal = this.saldo + valorDepositado;
        }
        return console.log(`Seu saldo foi alterado para: ${saldoFinal}`);
    }
    this.saque = function saque(saque) {
        if (saque) {
            novoSaldo = this.saldo - saque;
            this.saldo = novoSaldo;
        }
        return console.log(`Você acaba de sacar ${saque}. Sua conta foi atualizada para ${this.saldo}`);
    }
    this.numDaConta = function numDaConta() {
        return console.log(`Número da conta: ${this.numDaConta}`);
    }
}
// const meuSaldoInicial = prompt("Digite um saldo: ");
// const meuDeposito = prompt("Digite um valor a ser depositado: ");
// const  = prompt("Digite um saldo: ");

const minhaConta = new Banco("Conta Santander", 1000, "poupança", "1234");
minhaConta.buscarSaldo();
minhaConta.deposito(200);
minhaConta.saque(700);
minhaConta.numDaConta();