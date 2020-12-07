// Modelando CLASSES no ES6:

function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}
Carro.prototype.andar = () => {
  console.log("vrum vrum");
};

const prototipo = new Carro("prototipo", "12123456", 2);
console.log(prototipo.modelo);
prototipo.andar();
// Criando um carro:
// const sonix = new Carro("Sonix", "23456789", 4);
// console.log(sonix.modelo);
// sonix.andar();

// Estendendo o Sonix de Carro (ECMAScript 2015):
function Sonix(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas);
}
Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;
const sonix = new Sonix("Sonix", "789456", 4);
console.log(sonix.modelo);
sonix.andar();

Sonix.prototype.abrirTeto = () => {
  console.log("abrindo teto solar");
};
const sonix_ = new Sonix("Sonix", "789456", 4);
sonix_.abrirTeto();
