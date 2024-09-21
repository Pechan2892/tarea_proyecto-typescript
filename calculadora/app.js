"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
// Función para operar según el tipo de operación solicitada
function operar(operacion) {
    var _a, _b;
    const input1 = parseFloat(((_a = document.getElementById("input1")) === null || _a === void 0 ? void 0 : _a.value) || "0");
    const input2 = parseFloat(((_b = document.getElementById("input2")) === null || _b === void 0 ? void 0 : _b.value) || "0");
    const calculadora = new Calculadora();
    let resultado;
    try {
        switch (operacion) {
            case 'sumar':
                resultado = calculadora.sumar(input1, input2);
                break;
            case 'restar':
                resultado = calculadora.restar(input1, input2);
                break;
            case 'multiplicar':
                resultado = calculadora.multiplicar(input1, input2);
                break;
            case 'dividir':
                resultado = calculadora.dividir(input1, input2);
                break;
            case 'potencia':
                resultado = calculadora.potencia(input1, input2);
                break;
            default:
                throw new Error("Operación no reconocida.");
        }
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            resultadoElement.innerText = "Resultado: " + resultado;
        }
    }
    catch (error) {
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            resultadoElement.innerText = "Error: " + (error instanceof Error ? error.message : "Error desconocido");
        }
    }
}
// Función para calcular el factorial
function calcularFactorial() {
    var _a;
    const input1 = parseInt(((_a = document.getElementById("input1")) === null || _a === void 0 ? void 0 : _a.value) || "0");
    const calculadora = new Calculadora();
    try {
        const resultado = calculadora.factorial(input1);
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            resultadoElement.innerText = "Resultado: " + resultado;
        }
    }
    catch (error) {
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            resultadoElement.innerText = "Error: " + (error instanceof Error ? error.message : "Error desconocido");
        }
    }
}
