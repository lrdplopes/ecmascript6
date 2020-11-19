let bruxos = ["Harry Potter", "Hermione Granger", "Rony Weasley"];

let iterador = bruxos[Symbol.iterator]();
let done = false;
let proximo = iterador.next();

for (let bruxo of bruxos) {
  chapeuSeletor.fazerSelecaoDaCasa(bruxo);
}

const result = iterador.next();
