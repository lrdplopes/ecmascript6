// Declaração de propriedades;
//ES5:
var nome = "Maria";
var sobrenome = "Madalena";
var pessoa = {
  nome: nome,
  sobrenome: sobrenome,
};

//ES6 (Nova sintaxe):
const nome = "Maria";
const sobrenome = "Madalena";
const pessoa = {
  nome,
  sobrenome,
};

// No caso de FUNÇÕES;
// ES5:
const nome = "Maria";
const sobrenome = "Madalena";
const seApresentar = function () {
  console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
};
const pessoa = { nome, sobrenome, seApresentar };
pessoa.seApresentar();
// ES6:
const nome = "Maria";
const sobrenome = "Madalena";
const pessoa = {
  nome,
  sobrenome,
  seApresentar() {
    console.log(`Olá! Eu sou a ${this.nome} ${this.sobrenome}`);
  },
};
pessoa.seApresentar();
