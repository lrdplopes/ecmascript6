// Método antigo:

let fruits = ["pineapple", "apple", "grape"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Método utilizando o .forEach:

let names = ["Lucas", "Clara", "Pedro"];
names.forEach((name) => {
  console.log(name);
});

// OU

let names_ = ["Lucas", "Clara", "Pedro", "Nicole"];
function printName(name) {
  console.log(name);
}
names_.forEach(printName);

// Importante: Entretanto, o forEach quando acrescentado um elemento antes de chamar a função, este não é exibido.Todavia, ao lançar um novo console.log, o novo elemento será adicionado de acordo com os valores dos elementos do Array;
