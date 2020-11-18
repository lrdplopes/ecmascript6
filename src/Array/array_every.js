// Método EVERY é muito útil para validar se todos os elementos de um ARRAY respeitam uma dada condição.

// Supondo que queremos verificar se todos os alunos são maior de idade;
//Método antigo:

let alums = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let allOlderAlums = true;
for (let i = 0; i < alums.length; i++) {
  if (alums[i].age < 18) {
    allOlderAlums = false;
    break;
  }
}

console.log(allOlderAlums);

// Método novo

let alums_ = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let allOlderAlums_ = alums.every((alum) => {
  return alum.age >= 18;
});

console.log(allOlderAlums_);
