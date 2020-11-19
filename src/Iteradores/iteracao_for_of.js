// Novo laço de repetição for ...of;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
  console.log(number);
}

// IMPORTANTE: O laço for ...of não aceita trazer dados de um OBJETO. Para isso, devemos recorrer ao laço for ...in;

// Método BREAK para for ...of: este é utilizado para interromper a execução de um laço. Por exemplo:

let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  if (number > 3) {
    break;
  }

  console.log(number); // exibe 1 2 3
}

// Método CONTINUE - utilizado para indicar que o laço deve continuar e/ou continuar a partir de ... :
let numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) {
  if (number === 2) {
    continue;
  }

  console.log(number); // exibe 1 3 4 5 6
}
