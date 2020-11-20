// O método INDEXOF checa se existe um determinado valor no Array com o (-1) e então adiciona um novo dado. Caso o elemento já exista, então este não é adicionado.

function Set() {
  let array = [];
  this.add = function (valor) {
    if (array.indexOf(valor) === -1) {
      array.push(valor);
    }
  };

  this.mostrarValores = function () {
    console.log(array);
  };
}

// O SET é uma estrutura de dados que nos permite ter listas com valores que nunca se duplicam e que mantém a ordem de inserção de seus intens. ESTE NOVO MÉTODO FARÁ MAIS SENTIDO NO LUGAR DE INDEXOF.

let set = new Set([1, 2, 3, 4, 5, 6]);
// set.add(2);
// set.add(3);
// set.add(1);
// set.add(2);

for (const valor of set) {
  console.log(valor);
}

// Um novo exemplo utilizando lista de músicas:

let music = new Set(["musica1", "musica2", "musica3"]);
//music.delete("musica1");

for (let musica of music) {
  console.log(musica);
}

// music.clear();
for (let musica of music) {
  console.log(musica);
}

// music.has();
if (music.has("musica1")) {
  console.log("encontra-se na lista");
}

// music.size();
let quantasMusicas = music.size;
console.log(quantasMusicas);
