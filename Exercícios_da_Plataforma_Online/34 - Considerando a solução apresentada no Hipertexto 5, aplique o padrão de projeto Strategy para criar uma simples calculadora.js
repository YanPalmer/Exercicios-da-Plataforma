const prompt = require("prompt-sync")();

// Interface Strategy
class OperacaoStrategy {
    execute(numero1, numero2) { }
}

// Estratégia de Soma
class SomaStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
        return numero1 + numero2;
    }
}

// Estratégia de Subtração
class SubtracaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
        return numero1 - numero2;
    }
}

// Estratégia de Multiplicação
class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(numero1, numero2) {
        return numero1 * numero2;
    }
}

// Contexto da Calculadora
class Calculadora {
    constructor(operacaoStrategy) {
        this.operacaoStrategy = operacaoStrategy;
    }

    setOperacaoStrategy(operacaoStrategy) {
        this.operacaoStrategy = operacaoStrategy;
    }

    calcular(numero1, numero2) {
        return this.operacaoStrategy.execute(numero1, numero2);
    }
}

// Exemplo de uso
const calculadora = new Calculadora(new SomaStrategy());

const numero1 = parseInt(prompt('Digite o primeiro número:'));
const numero2 = parseInt(prompt('Digite o segundo número:'));
const operacao = prompt('Digite a operação desejada (+, -, *):');

// Define a estratégia com base na operação informada
switch (operacao) {
    case '+':
        calculadora.setOperacaoStrategy(new SomaStrategy());
        break;
    case '-':
        calculadora.setOperacaoStrategy(new SubtracaoStrategy());
        break;
    case '*':
        calculadora.setOperacaoStrategy(new MultiplicacaoStrategy());
        break;
    default:
        console.log('Operação inválida.');
        break;
}

// Realiza o cálculo e exibe o resultado
if (calculadora.operacaoStrategy) {
    const resultado = calculadora.calcular(numero1, numero2);
    console.log(`Resultado da operação: ${resultado}`);
}
