// Método FILTER é muito útil quando precisamos filtrar nossa lista de acordo com algum critério.

// Supondo que precisamos filtrar uma lista de alunos, todos os que são maiores de idade;
//Método antigo:

let alums = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let olderAlums = [];
for (let i = 0; i < alums.length; i++) {
  if (alums[i].age >= 18) {
    olderAlums.push(alums[i]);
  }
}

console.log(olderAlums);

// Método novo:

let alums_ = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let olderAlums_ = alums.filter((alum) => {
  return alum.age >= 18;
});

console.log(olderAlums_);
