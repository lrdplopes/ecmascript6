// Método ENTRIES:
const Pessoa = {
  nome: "Lucas",
  idade: 32,
};
const result = Object.entries(Pessoa);
console.log(result);

//Exemplo com laço de repetição:
for (let [x, y] of Object.entries(Pessoa)) {
  console.log(`${x}: ${y}`);
}

// O método VALUES podemos dizer que se trata da mesma função, porém ele exibe somente os valores:
const resultValues = Object.values(Pessoa);
console.log(resultValues);
