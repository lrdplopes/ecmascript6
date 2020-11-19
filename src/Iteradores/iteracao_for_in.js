// Método (LAÇO) for ...in percorre os nomes dos atributos de um objeto;

let perfilFacebook = {
  name: "Lucas",
  age: 32,
};

for (let property in perfilFacebook) {
  let info = perfilFacebook[property];
  console.log(info);
}
