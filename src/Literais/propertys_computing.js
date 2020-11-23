// Exemplo 1
const nomeMetodo = "invocar";
const objeto = {
  [nomeMetodo]() {
    console.log("executou método");
  },
};
objeto[nomeMetodo]();
// Exemplo 2
const nomeFuncao = "mostrar";
const propriedade = "Nome";
const objetoNovo = {
  Nome: "Objeto",
  [`${nomeFuncao}${propriedade}`]() {
    console.log(this[propriedade]);
  },
};
objetoNovo.mostrarNome();
// Exemplo 3
const apelido = "apelido";
const pessoaNovo = {
  nome: "Jose",
  [apelido]: "Zé",
};
pessoaNovo[apelido];
