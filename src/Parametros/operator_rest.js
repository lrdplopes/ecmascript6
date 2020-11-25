// Utilizando o método ARGUMENTS do ES5:
function montaQuerySelect() {
  const tabela = arguments[0];
  const qtdArgs = arguments.length;
  let cols = "";
  if (qtdArgs > 1) {
    for (let index = 1; index < qtdArgs; index++) {
      cols += `${arguments[index]}`;
    }

    cols = cols.substring(0, cols.length - 2);
  } else {
    cols = "*";
  }

  return `SELECT ${cols} from ${tabela}`;
}

const query1 = montaQuerySelect("tabela");
const query2 = montaQuerySelect("tabela", "col1");
const query3 = montaQuerySelect("tabela", "col1", "col2");

// Exemplo do ARGUMENTS (este nos retorna um objeto com sintaxe de ARRAY (PORÉM NÃO É UM ARRAY)):
function logarTodosArgumentos() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
logarTodosArgumentos(1, 2, 3);

//Exemplo 2:
function somar() {
  let soma = 0;
  const qtd = arguments.length;
  for (let i = 0; i < qtd; i++) {
    soma += arguments[i];
  }
  return soma;
}

console.log(somar(1, 2, 3, 4, 5, 6));

// Com o ES6 o método ARGUMENTS foi atualizado para o ...REST (e diferente de ARGUMENTS, este pode ser considerado com retorno de sintaxe de ARRAY):
function somar(...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor;
  }, 0);
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));

// Exemplo 2 (multiplicador):
function somaeMultiplicaPor(multiplicador, ...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor * multiplicador;
  }, 0);
}

console.log(somaeMultiplicaPor(2, 1, 2));
console.log(somaeMultiplicaPor(2, 6, 7));
