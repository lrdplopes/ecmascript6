// Utilizando CLASSES no ES6:
class Carro {
  constructor(modelo, chassi, qtdPortas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }

  andar() {
    console.log("vrum vrum");
  }
}

const basicoES6 = new Carro("Básico", "123456789", 2);
console.log(basicoES6.modelo);
console.log(basicoES6.chassi);
basicoES6.andar();

// Estendendo carro SONIX a classe Carro:
class Sonix extends Carro {
  constructor(modelo, chassi, qtdPortas) {
    super(modelo, chassi, qtdPortas);
  }

  abrirTeto() {
    console.log("abrindo teto solar");
  }
}
const sonix = new Sonix("Kinderovo", "123456321", 4);
sonix.abrirTeto();
sonix.andar();
console.log(sonix.modelo);
