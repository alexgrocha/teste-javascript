// Função para calcular o MDC.
function calcularMDC(valor1, valor2) {
    while (valor2 !== 0) {
        const temp = valor2;
        valor2 = valor1 % valor2;
        valor1 = temp;
    }
    return valor1;
}
// Função para ler os números e calcular o MDC
function calcularEMostrarMDC(num1, num2) {
    const mdc = calcularMDC(num1, num2);
    console.log(`O máximo divisor comum entre ${num1} e ${num2} é ${mdc}`);
}
// Números diretamente ao chamar a função
calcularEMostrarMDC(48, 18);
