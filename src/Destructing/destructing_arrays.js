// Obtendo valores no ECMScript 2015:
const cores = ["azul", "cinza", "branco", "preto"];
console.log(cores[0]);
console.log(cores[3]);

// Utilizando o Desestruturamento ES6:
const [cor1, , , cor2] = ["azul", "cinza", "branco", "preto"];
console.log(cor1);
console.log(cor2);

// Utilizando um exemplo mais complexo:
const contatos = [
  { nome: "Alex Junior", numero: "1234-5678" },
  { nome: "Carolina Moya", numero: "1234-6789" },
  { nome: "Fernando Jorge", numero: "1234-5567" },
];
// Extraíndo somente o número do contato do meio:
const [, Carol] = contatos;
function mostrarNumero({ numero }) {
  console.log(numero);
}
mostrarNumero(Carol);
// OU:
function mostraNumeroCarol([, , { numero }]) {
  console.log(numero);
}
mostraNumeroCarol(contatos);

// Exemplo um pouco complexo quanto acima:
const rotas = {
  rapidas: ["Rodovia", "Estrada X", "Estrada Y"],
};

const {
  rapidas: [rapida],
} = rotas;
console.log(rapida);
