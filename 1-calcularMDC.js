// Função para calcular o MDC.
function calcularMDC(valor1, valor2) {
    while (valor2 !== 0) {
        const temp = valor2;
        valor2 = valor1 % valor2;
        valor1 = temp;
    }
    return valor1;
}
export default{calcularMDC}

// Números diretamente ao chamar a função
calcularEMostrarMDC(48, 18);