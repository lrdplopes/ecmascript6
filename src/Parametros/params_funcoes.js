function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio = "") {
  console.log(`${nome} ${sobrenome} ${nomeDoMeio}`);
}
imprimeNomeCompleto("Lucas", "Pereira");
//
function multiplicaValor(valor, multiplicador = 2) {
  return valor * multiplicador;
}

const valor = multiplicaValor(2, 8);
console.log(valor);
//
const calculaPotencia = (x = 2, y = x) => {
  console.log(Math.pow(x, y));
};

calculaPotencia();
calculaPotencia(2);
calculaPotencia(2, 2);
//
function facaAlgoComMeuNome(
  nome,
  callback = (z) => {
    console.log(z);
  }
) {
  callback(nome);
}

facaAlgoComMeuNome("Lucas");
