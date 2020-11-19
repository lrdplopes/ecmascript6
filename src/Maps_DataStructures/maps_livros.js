let estantes = new Map();
for (let livro of livros) {
  estantes.set(livro.getTitulo(), livro.getEstante());
}

function getLocalizacaoDoLivro(tituloLivro) {
  let estante = estantes.get(tituloLivro);
  if (estante === undefined) {
    return "Livro não identificado";
  }

  return estantes.get(tituloLivro);
}
