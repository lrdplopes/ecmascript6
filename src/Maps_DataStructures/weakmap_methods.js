// Um WEAKMAP é uma coleção de pares de chave / valor no qual as chaves só podem ser objetos.

let weakMap = new WeakMap();
let elemento1 = window;
let elemento2 = document.querySelector("body");

weakMap.set(elemento1, "sou o elemento 1");
weakMap.set(elemento2, "sou o elemento 2");

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));

// Utilizando atributos privados:

function Pessoa(nome) {
  this._nome = nome;
}
Pessoa.prototype.getNome = function () {
  return this._nome;
};

let lucas = new Pessoa("Lucas");
console.log(lucas.getNome());
console.log(lucas._nome);

// Ao usar o WEAKMAP conseguimos esconder a propriedade que guarda o valor:

let pessoa = (function () {
  let dadosPrivados = new WeakMap();

  function Pessoa(nome) {
    dadosPrivados.set(this, { nome: nome });
  }

  Pessoa.prototype.getNome = function () {
    return dadosPrivados.get(this).nome;
  };

  return Pessoa;
})();

let rafael = new Pessoa("Rafael");
console.log(rafael.getNome());
console.log(rafael.nome);
