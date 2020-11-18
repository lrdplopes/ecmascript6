// Método SOME é muito útil para validar se pelo menos um dos elementos do ARRAY satisfaz determinada condição.

// Supondo que queremos verificar se algumas das malas do passageiro ultrapassa o peso de 30kg;
//Método antigo:

let weightBags = [12, 32, 21, 29];
let haveBagsUpWeight = false;

for (let i = 0; i < weightBags.length; i++) {
  if (weightBags[i] > 30) {
    haveBagsUpWeight = true;
  }
}

console.log(haveBagsUpWeight);

// Método novo:

let weightBags_ = [12, 32, 21, 29];
let haveBagsUpWeight_ = weightBags.some((weight) => {
  return weight > 30;
});

console.log(haveBagsUpWeight_);
