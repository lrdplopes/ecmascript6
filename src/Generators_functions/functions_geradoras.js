// Funções geradoras:
const equipes = {
  quantidade: 3,
  maturidade: "alta",
  senior: "Lucas",
  pleno: "Clara",
  junior: "Pedro",
  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  },
};

for (let integrante of equipes) {
  console.log(integrante);
}

// Exemplo 2:
const timeDesenvolvimento = {
  quantidade: 3,
  maturidade: "alta",
  senior: "Lucas",
  pleno: "Clara",
  junior: "Pedro",
  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  },
};

const timeNegocios = {
  quantidade: 2,
  diretor: "Antonio",
  vice: "Fabricio",
  [Symbol.iterator]: function* () {
    yield this.diretor;
    yield this.vice;
  },
};

const joinEquipe = {
  timeDesenvolvimento,
  timeNegocios,
  [Symbol.iterator]: function* () {
    yield* timeDesenvolvimento;
    yield* timeNegocios;
  },
};

for (let allIntegrantes of joinEquipe) {
  console.log(allIntegrantes);
}
