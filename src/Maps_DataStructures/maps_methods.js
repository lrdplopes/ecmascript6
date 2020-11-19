let map = new Map();
function funcao() {}
let objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma função");

console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

// quantos intens um mapa tem:
console.log("Tamanho " + map.size);

// saber se existe uma chave específica dentro do mapa:
console.log(map.has("string"));
console.log(map.has("teste"));

// para remover um registro podemos utilizar o método DELETE:
map.delete("string");
console.log(map.has("string"));

// se necessário remover todos os dados podemos utilizar o método CLEAR:
// map.clear();
console.log("Tamanho " + map.size);

// Além disse o método MAP é um objeto iterável. Então, podemos utilizar o laço for ...of para iterá-los através das chaves keys, values and entries:
map.set("um", 1);
map.set("dois", 2);
map.set("tres", 3);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let entrie of map.entries()) {
  console.log(entrie);
}
