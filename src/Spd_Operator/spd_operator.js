// No ES6 foi implementado o Spread Operator, onde podemos obter todos os valores de um ARRAY conforme abaixo:

let argumentos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...argumentos);

// Exemplo 2:
const listaMae = ["leite", "ovos", "papel"];
const listaNamorada = ["arroz", "feijão", "suco"];
const listaEscritorio = ["adesivos", "canetas", "cadernos"];

const listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio];
console.log(listaCompras);

// Exemplo 3:
const produtoSelecionado = {
  descricao: "Blusa de Lã",
  preco: "R$60,00",
};

const carrinho = [
  { descricao: "Bota de cano médio", preco: "R$199,90" },
  { descricao: "Saia colorida", preco: "R$29,90" },
  { descricao: "Vestido longo", preco: "R$399,90" },
];
const carrinhoAtualizado = [...carrinho, produtoSelecionado];

for (let compras of carrinhoAtualizado) {
  console.log(compras);
}

// Exemplo 4 (utilizando em chamada de funções):
function soma(a, b) {
  console.log(a + b);
}
const result = [5, 80];
soma(...result);

// Exemplo 5:
function contarVogais(palavra) {
  let qtdVogais = 0;
  const palavraLowerCase = palavra.toLowerCase();
  const letras = [...palavraLowerCase];
  for (letra of letras) {
    if ("aeiou".indexOf(letra) !== -1) {
      qtdVogais++;
    }
  }

  return qtdVogais;
}
const result_ = contarVogais("ecmascript");
console.log(result_);

// Utilizando o Spread Operator junto de REST:
function contarVogaisNew(...palavras) {
  let qtdVogais = 0;
  for (let palavra of palavras) {
    let palavraLowerCase = palavra.toLowerCase();
    const letras = [...palavraLowerCase];
    for (let letra of letras) {
      if ("aeiou".indexOf(letra) !== -1) {
        qtdVogais++;
      }
    }
  }

  return qtdVogais;
}
const result_2 = contarVogaisNew("java", "javascript");
console.log(result_2);
