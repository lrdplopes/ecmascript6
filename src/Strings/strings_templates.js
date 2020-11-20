// Método antigo e bem confuso:
const login = "ecmascript";
const date = "20 de Novembro";
const year = 2020;

const print = "Hello" + login + "!\nToday is: " + date + "de" + year;
console.log(print);

// Método novo com Template Literals:
const name = "Lucas";
console.log(`Welcome, ${name}!`);
// ----n----

const n1 = 1,
  n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
// ----n----

const hours = new Date().getHours();
function defineMensagem(strings, ...values) {
  const hour = values[1];
  if (hour >= 6 && hour <= 12) {
    values[0] = "Bom dia";
  } else if (hour > 12 && hour <= 18) {
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite";
  }
  values[0] = `${values[0]}, são`;
  return `${values[0]} ${strings[0]} ${hour} ${strings[2]}`;
}

const message = defineMensagem`${""} ${hours} horas`;
console.log(message);
