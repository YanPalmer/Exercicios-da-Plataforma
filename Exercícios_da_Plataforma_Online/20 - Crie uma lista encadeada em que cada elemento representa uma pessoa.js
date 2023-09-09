/*
Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

class Pessoa {
    constructor(nome, idade, filho) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
      this.proximo = null;
    }
    setProximo(proximoPessoa) {
      this.proximo = proximoPessoa;
    }
  }
  
  const pessoa1 = new Pessoa("Yan", 30, null);
  const pessoa2 = new Pessoa("Erick", 40, null);
  const pessoa3 = new Pessoa("Elton", 25, null);
  
  pessoa1.filho = pessoa2;
  pessoa2.filho = pessoa3;
  
  const listaEncadeada = pessoa1;
  pessoa1.setProximo(pessoa2);
  pessoa2.setProximo(pessoa3);
  
  console.log(listaEncadeada.nome);
  console.log(listaEncadeada.idade);
  console.log(listaEncadeada.filho.nome);
  console.log(listaEncadeada.filho.idade);
  console.log(listaEncadeada.filho.filho.nome);
  console.log(listaEncadeada.filho.filho.idade);