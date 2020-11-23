// Declaração de função:
function desligar() {}

// Expressão de função:
let funcaoDesligar = function () {};
// ARROW FUNCTIONS são implementações de funções por expressão:
// Exemplo 1:
const boasVindas = (nome) => {
  return "Seja bem-vindo" + nome;
};
boasVindas("Luiz");
//Exemplo2:
const equipes = {
  nome: "Guerreiros Z",
  membros: ["Goku", "Kuririn", "Vegeta"],
  membrosDaEquipe: function () {
    this.membros.forEach((membro) => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  },
};

equipes.membrosDaEquipe();
