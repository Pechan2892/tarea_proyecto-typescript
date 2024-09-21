class CabeceraPagina {
    // Atributos con valores por defecto
    private titulo: string = "Título por Defecto";
    private color: string = "black";
    private fuente: string = "Arial";
    private alineacion: string = "left";  // Alineación por defecto a la izquierda

    // Método para configurar el título, color y fuente
    public configurarTitulo(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método para definir la alineación (centrado, derecha, izquierda)
    public definirAlineacion(alineacion: string): void {
        const opcionesAlineacion = ['centro', 'derecha', 'izquierda'];
        if (opcionesAlineacion.includes(alineacion)) {
            this.alineacion = alineacion;
        } else {
            console.error("Alineación no válida. Use 'centro', 'derecha' o 'izquierda'.");
        }
    }

    // Método para imprimir todas las propiedades
    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }

    // Método para aplicar las propiedades al DOM (visualización en la página)
    public aplicarEstilos(): void {
        const tituloElemento = document.getElementById('titulo-pagina');
        if (tituloElemento) {
            tituloElemento.innerText = this.titulo;
            tituloElemento.style.color = this.color;
            tituloElemento.style.fontFamily = this.fuente;
            tituloElemento.style.textAlign = this.traducirAlineacion(this.alineacion);
        } else {
            console.error("Elemento con id 'titulo-pagina' no encontrado.");
        }
    }

    // Método auxiliar para traducir la alineación
    private traducirAlineacion(alineacion: string): string {
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
