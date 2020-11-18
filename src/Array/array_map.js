// Método MAP é muito útil quando precisamos não somente passar por elementos do Array, mas também modificá-los.

// Supondo que precisamos duplicar os números... Método antigo:

let numbers = [1, 2, 3];
let double = [];

for (let i = 0; i < numbers.length; i++) {
  double.push(numbers[i] * 2);
}

console.log(numbers);
console.log(double);

// Método novo:

let numbers_ = [1, 2, 3];
let double_ = numbers.map((number) => {
  return number * 2;
});

console.log(numbers_);
console.log(double_);

// Importante: Entretanto, o map() quando acrescentado um elemento antes de chamar a função, este não é exibido.Todavia, ao lançar um novo console.log, o novo elemento será adicionado de acordo com os valores dos elementos do Array;
