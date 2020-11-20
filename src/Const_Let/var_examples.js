// ERRADO
var texto = "texto";
var idade = 10;
console.log(texto + idade);

// CONSTANTE - const (são variáveis que não podem ser alterado seus valores):
const dateOfBirth = "03/11/1988";
// dateOfBirth = "04/02/1992"; ISSO NÃO FUNCIONA.
// Por outro lado podemos adicionar valor a esta:
const person = { name: "Lucas" };
person.age = 32;
console.log(person);

// Exemplos de LET - let deve ser utilizado para declarar variáveis que devem ser atualizadas de acordo com o código:
let resultado = 0;
resultado = 2 + 3;
console.log(resultado);
