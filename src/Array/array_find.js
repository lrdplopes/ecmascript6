// Método FIND é muito útil quando precisamos encontrar um ítem específico dentro de um ARRAY.

// Supondo que precisamos filtrar uma lista de alunos, e neste somente o registro que contenha o nome Lucas;

//Método antigo:

let alums = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let alum;
for (let i = 0; i < alums.length; i++) {
  if (alums[i].name === "Lucas") {
    alum = alums[i];
    break;
  }
}

console.log(alum);

// Método novo:

let alunos = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let alum_ = alunos.find((aluno) => {
  return aluno.name === "Clara";
});

console.log(alum_);

// Para caso haja mais de um aluno com o mesmo nome, somente um aluno será retornado. Para tal, precisamos utilizar um método mais específico.
