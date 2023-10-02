const { describe } = require('mocha');
const{calcularMDC} = require('./1-calcularMDC');
const {encontrarIndicesMaiorMenor} = require('./2-arrayNumerico');
const {somaMultiplo} = require('./3-somaMultiplos');

describe('Funções Matemáticas Calcular o MDC', () => {   
    it('Função para ler os números e calcular o MDC!', () => {
        function calcularEMostrarMDC(num1, num2) {
            const mdc = calcularMDC(num1, num2);
            console.log(`O máximo divisor comum entre ${num1} e ${num2} é ${mdc}`);
        }
    });
});

describe('Funções Matemáticas Calcular Array Numerico', () => {
    it('Calcular o Array Numerico', () => {
    
        test('Encontra os índices do maior e menor valores em um array', () => {
        const array = [99, 0, 45, 5, 10];
        const indices = encontrarIndicesMaiorMenor(array);
    
        expect(indices.maiorValor).toBe(0); // O maior valor é 99, e seu índice é 0
        expect(indices.menorValor).toBe(1); // O menor valor é 0, e seu índice é 1
        });
    
    });
});    

describe('Funções Matemáticas Soma Multiplos', () => {
    test('Calcula a soma dos múltiplos de 5 ou 7 abaixo de um limite', () => {
        const limit = 1000;
        const resultado = somaMultiplo(limit);
      
        expect(resultado).toBe(214216); // O resultado esperado para limit = 1000
      });
});