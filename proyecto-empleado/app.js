"use strict";
// Clase abstracta Persona
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    esMayorDeEdad() {
        return this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    }
}
// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    // Método para cargar sueldo
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    // Método para imprimir el sueldo
    imprimirSueldo() {
        return `Sueldo: $${this.sueldo}`;
    }
    // Implementación del método abstracto para mostrar los datos personales
    mostrarDatosPersonales() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad} (${this.esMayorDeEdad()})`);
    }
}
// Crear un objeto de la clase Empleado y usar los métodos
const empleado = new Empleado("Juan", "Pérez", "Calle Falsa 123", "123456789", 25, 1500);
// Función para mostrar los datos del empleado en la página
function mostrarDatosEmpleado() {
    const datosDiv = document.getElementById("datos-empleado");
    const sueldoDiv = document.getElementById("sueldo-empleado");
    if (datosDiv && sueldoDiv) {
        datosDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${empleado.nombre} ${empleado.apellido}</p>
            <p><strong>Dirección:</strong> ${empleado.direccion}</p>
            <p><strong>Teléfono:</strong> ${empleado.telefono}</p>
            <p><strong>Edad:</strong> ${empleado.edad} (${empleado.esMayorDeEdad()})</p>
        `;
        sueldoDiv.innerHTML = `<p><strong>Sueldo:</strong> $${empleado.sueldo}</p>`;
    }
}
// Llamamos a la función para mostrar los datos al cargar la página
mostrarDatosEmpleado();
