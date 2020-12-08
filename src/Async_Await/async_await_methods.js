/* As funções de ASYNC e AWAIT entraram no lugar de PROMISES basicamente quando devemos consumir APIs.
Primeiramente iremos exemplificar o método antigo.
OBS: No método novo não obrigatoriamente devemos inserir dentro de TRY/CATCH. Porém, este se faz importante uma vez que no mundo real devemos ter logs de erros uma vez que causado algum erro na chamada da API. */

// Método antigo:
function showGitUser(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((res) => res.json())
    .then((user) => {
      console.log(user);
    })
    .catch((err) => console.log(err));
}
showGitUser("insira_login_do_usuario");

// Método novo utilizando ASYNC and AWAIT:
async function showGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const res = await fetch(url);
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log("error", error);
  }
}
// Chamando a API através do usuário:
showGitHubUser("lrdplopes");
