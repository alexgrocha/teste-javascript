function somaMultiplo(limit) {
  let sum = 0;
  
  for (let i = 1; i < limit; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

const valormax = 1000;
const valor = somaMultiplo(valormax);
console.log(`A soma dos múltiplos de 5 ou 7 abaixo de ${valormax} é ${valor}.`);
