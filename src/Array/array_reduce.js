// Método SOME é muito útil para pegar todos os valores de um ARRAY  e condensa-los e em único.

// Supondo que queremos fazer a soma de todos os elementos dentro de um ARRAY;
//Método antigo:

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// Método novo:

let numbers_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum_ = 0;

sum_ = numbers_.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sum_);

// Outro exemplo com alunos. E queremos pegar uma lista somente com o nome dos alunos:

let alums = [
  { name: "Lucas", age: 32 },
  { name: "Clara", age: 28 },
  { name: "Pedro", age: 25 },
];

let names = alums.reduce((arrayNames, alum) => {
  arrayNames.push(alum.name);
  return arrayNames;
}, []);

console.log(names);
