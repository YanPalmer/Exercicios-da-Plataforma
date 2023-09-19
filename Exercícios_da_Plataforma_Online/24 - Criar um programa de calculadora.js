// Criar um programa de calculadora

const prompt = require("prompt-sync")();

function calcular(valor1, valor2, operador) {
    let resultado;
    let sobra;
  
    switch (operador) {
      case '+':
        resultado = valor1 + valor2;
        break;
      case '-':
        resultado = valor1 - valor2;
        break;
      case '*':
        resultado = valor1 * valor2;
        break;
      case '/':
        if (valor2 === 0) {
          return "Divisão por zero não é permitida.";
        }
        resultado = Math.floor(valor1 / valor2); // Resultado da divisão
        sobra = valor1 % valor2; // Sobra da divisão
        break;
      default:
        return "Operador inválido.";
    }
  
    if (sobra !== undefined) {
      return `Resultado: ${resultado}, Sobra: ${sobra}`;
    } else {
      return `Resultado: ${resultado}`;
    }
  }
  
  // Exemplo de uso
  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));
  const operador = prompt("Digite o operador (+, -, *, /):");
  
  const resultado = calcular(valor1, valor2, operador);
  console.log(resultado);