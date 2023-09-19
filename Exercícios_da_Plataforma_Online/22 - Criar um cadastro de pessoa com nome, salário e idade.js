// Criar um cadastro de pessoa com nome, salário e idade

const prompt = require("prompt-sync")();

const nome = String(prompt("Digite seu nome: "));
const salario = parseFloat(prompt("Digite seu salário: "));
const idade = Number(prompt("Digite sua idade: "));
const diploma = prompt("Se você possui diploma digite (s), se não, tecle enter: ");

console.log("Nome: ", nome);
console.log("Salário: ", salario);
console.log("Idade: ", idade);
console.log("Diploma: ", verificar());

// Verifica se é "s", caso não, não tem diploma
function verificar() {
    if (diploma === "s") {
        return true;
    } else {
        return false;
    }
}