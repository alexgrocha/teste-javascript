// codigo.js
function encontrarIndicesMaiorMenor(array) {
    // Encontrar o índice do maior valor
    const maiorValor = array.indexOf(Math.max(...array));
  
    // Encontrar o índice do menor valor
    const menorValor = array.indexOf(Math.min(...array));
  
    return { maiorValor, menorValor };
  }
  
  module.exports = encontrarIndicesMaiorMenor;
  