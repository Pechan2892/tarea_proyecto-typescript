"use strict";
class CabeceraPagina {
    constructor() {
        // Atributos con valores por defecto
        this.titulo = "Título por Defecto";
        this.color = "black";
        this.fuente = "Arial";
        this.alineacion = "left"; // Alineación por defecto a la izquierda
    }
    // Método para configurar el título, color y fuente
    configurarTitulo(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método para definir la alineación (centrado, derecha, izquierda)
    definirAlineacion(alineacion) {
        const opcionesAlineacion = ['centro', 'derecha', 'izquierda'];
        if (opcionesAlineacion.includes(alineacion)) {
            this.alineacion = alineacion;
        }
        else {
            console.error("Alineación no válida. Use 'centro', 'derecha' o 'izquierda'.");
        }
    }
    // Método para imprimir todas las propiedades
    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
    // Método para aplicar las propiedades al DOM (visualización en la página)
    aplicarEstilos() {
        const tituloElemento = document.getElementById('titulo-pagina');
        if (tituloElemento) {
            tituloElemento.innerText = this.titulo;
            tituloElemento.style.color = this.color;
            tituloElemento.style.fontFamily = this.fuente;
            tituloElemento.style.textAlign = this.traducirAlineacion(this.alineacion);
        }
        else {
            console.error("Elemento con id 'titulo-pagina' no encontrado.");
        }
    }
    // Método auxiliar para traducir la alineación
    traducirAlineacion(alineacion) {
        switch (alineacion) {
            case 'centro':
                return 'center';
            case 'derecha':
                return 'right';
            case 'izquierda':
                return 'left';
            default:
                return 'left';
        }
    }
}
// Crear un objeto de la clase CabeceraPagina y configurar las propiedades
const cabecera = new CabeceraPagina();
cabecera.configurarTitulo("Bienvenido a Mi Página", "blue", "Arial");
cabecera.definirAlineacion("centro");
cabecera.imprimirPropiedades();
// Aplicar las propiedades al DOM
cabecera.aplicarEstilos();
