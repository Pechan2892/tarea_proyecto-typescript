"use strict";
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    depositar(cantidadDeposito) {
        if (cantidadDeposito < 5) {
            this.mostrarMensaje("El valor a depositar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad += cantidadDeposito;
            this.mostrarMensaje(`Se ha depositado correctamente $${cantidadDeposito}. Saldo actual: $${this.cantidad}`);
        }
    }
    retirar(valor) {
        if (valor < 5) {
            this.mostrarMensaje("El valor a retirar debe ser mayor a $5.00.");
        }
        else if (this.cantidad < valor) {
            this.mostrarMensaje("No hay suficiente saldo en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            this.mostrarMensaje(`Has retirado $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }
    mostrarDatos() {
        return `Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`;
    }
    mostrarMensaje(mensaje) {
        const resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerText = mensaje;
        }
    }
}
// Instanciamos la cuenta
const miCuenta = new Cuenta("Edwin", 100, "Ahorros", "1234567890");
mostrarDatosCuenta();
// Función para mostrar los datos de la cuenta en el DOM
function mostrarDatosCuenta() {
    const datosDiv = document.getElementById("datos-cuenta");
    if (datosDiv) {
        datosDiv.innerText = miCuenta.mostrarDatos();
    }
}
// Función para hacer un depósito desde la interfaz
function depositar() {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseFloat(cantidadInput.value);
    miCuenta.depositar(cantidad);
    mostrarDatosCuenta();
}
// Función para hacer un retiro desde la interfaz
function retirar() {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseFloat(cantidadInput.value);
    miCuenta.retirar(cantidad);
    mostrarDatosCuenta();
}
