const Usuario = {
  nome: "Elliot",
  sobrenome: "Anderson",
  senha: "mrrobot",
  email: "elliot.anderson@gmail.com",
  profissao: "Engenheiro de Cibersegurança",
  github: "https://github.com/ElliotAnderson",
};
// Validando e-Mail com a desestruturação:
const { email } = Usuario;
console.log(email);
//
const { senha, confirmacaoSenha } = Usuario;
console.log(senha);
console.log(confirmacaoSenha);

// Rotulando propriedades executando como uma LABEL (rótulo):
const Pessoa = {
  sobrenome: "Alberto",
};
const { sobrenome: apelido } = Pessoa;
console.log(apelido);

// Desestruturando de vários objetos:
// Repare que na execução da função não podemos desestruturar todos juntos. Uma vez que temos 2 objetos, estes devem ser separados por uma ",";
const suco = {
  sabor: "uva",
  quantidade: "500ml",
};
const doce = {
  tipo: "açucar",
};
function descreveSuco({ sabor, quantidade }, { tipo }) {
  console.log(
    `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`
  );
}
descreveSuco(suco, doce);
