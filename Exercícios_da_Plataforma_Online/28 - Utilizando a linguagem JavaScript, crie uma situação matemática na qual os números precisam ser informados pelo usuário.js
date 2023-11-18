const prompt = require('prompt-sync')();

// Solicita dois números ao usuário
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

try {
    // Tenta realizar uma operação matemática
    let resultado = dividirNumeros(numero1, numero2);

    // Exibe o resultado se a operação for bem-sucedida
    console.log("O resultado da divisão é: " + resultado);
} catch (erro) {
    // Captura a exceção e exibe uma mensagem de erro
    console.error("Ocorreu um erro: " + erro.message);
} finally {
    // Este bloco será sempre executado, independentemente de haver exceção ou não
    console.log("O código foi executado, independentemente de ter ocorrido uma exceção.");
}

// Função que realiza a operação de divisão
function dividirNumeros(num1, num2) {
    // Converte as entradas para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Verifica se as conversões foram bem-sucedidas
    if (isNaN(num1) || isNaN(num2)) {
        // Lança uma exceção se uma das entradas não for um número
        throw new Error("Os valores informados não são números válidos.");
    }

    // Verifica se o segundo número é zero para evitar a divisão por zero
    if (num2 === 0) {
        // Lança uma exceção se o segundo número for zero
        throw new Error("Não é possível dividir por zero.");
    }

    // Realiza a operação de divisão e retorna o resultado
    return num1 / num2;
}
