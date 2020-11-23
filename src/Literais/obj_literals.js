//Funções construtoras e Objetos literais;
// Exemplo 1:
function Livro(titulo) {
  this.titulo = titulo;
}
const book = new Livro("Entendendo ES6");
console.log(book.titulo);
//Exemplo 2:
const livro_ = {
  titulo_: "Anjos e Demonios",
};
console.log(livro_.titulo_);

const outroLivro = livro_;
livro_.titulo = "O código da Vinci";

console.log(outroLivro.titulo);
console.log(livro_.titulo);
//Exemplo 3:
const livroNovo = {
  titulo: "Anjos e Demonios",
};
livroNovo.autor = "Dan Brown";
livroNovo["mostrarLivro"] = function () {
  console.log(this.titulo + " " + this.autor);
};
livroNovo.mostrarLivro();
