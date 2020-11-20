const arrayVar = [];
for (var i = 1; i < 5; i++) {
  arrayVar.push(function () {
    console.log(i);
  });
}

const arrayLet = [];
for (let i = 1; i < 5; i++) {
  arrayLet.push(function () {
    console.log(i);
  });
}

arrayVar.forEach(function (funcao) {
  funcao();
});

arrayLet.forEach(function (funcao) {
  funcao();
});
