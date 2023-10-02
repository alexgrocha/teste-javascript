
function somaMultiplo(limit) {
  let sum = 0;
  
  for (let i = 1; i < limit; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

module.exports = somaMultiplo;