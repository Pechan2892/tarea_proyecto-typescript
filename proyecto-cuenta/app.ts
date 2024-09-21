class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(cantidadDeposito: number): void {
        if (cantidadDeposito < 5) {
            this.mostrarMensaje("El valor a depositar debe ser mayor a $5.00.");
        } else {
            this.cantidad += cantidadDeposito;
            this.mostrarMensaje(`Se ha depositado correctamente $${cantidadDeposito}. Saldo actual: $${this.cantidad}`);
        }
    }

    public retirar(valor: number): void {
        if (valor < 5) {
            this.mostrarMensaje("El valor a retirar debe ser mayor a $5.00.");
        } else if (this.cantidad < valor) {
            this.mostrarMensaje("No hay suficiente saldo en la cuenta.");
        } else {
            this.cantidad -= valor;
            this.mostrarMensaje(`Has retirado $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    public mostrarDatos(): string {
        return `Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`;
    }

    private mostrarMensaje(mensaje: string): void {
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
    const cantidadInput = <HTMLInputElement>document.getElementById("cantidad");
    const cantidad = parseFloat(cantidadInput.value);
    miCuenta.depositar(cantidad);
    mostrarDatosCuenta();
}

// Función para hacer un retiro desde la interfaz
function retirar() {
    const cantidadInput = <HTMLInputElement>document.getElementById("cantidad");
    const cantidad = parseFloat(cantidadInput.value);
    miCuenta.retirar(cantidad);
    mostrarDatosCuenta();
}
