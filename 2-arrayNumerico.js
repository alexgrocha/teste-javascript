// Indice inica em 0!
// Array numérico sem valores repetidos!
const array = [99, 0, 45, 5, 10];

// Encontrar o índice do maior valor
const maiorValor = array.indexOf(Math.max(...array));

// Encontrar o índice do menor valor
const menorValor = array.indexOf(Math.min(...array));

console.log("Índice do maior valor:", maiorValor);
console.log("Índice do menor valor:", menorValor);
