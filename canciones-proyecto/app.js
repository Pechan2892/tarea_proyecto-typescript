"use strict";
// Clase Cancion como en el paso anterior
class Cancion {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    mostrarDatos() {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`;
    }
}
// Arreglo para almacenar las canciones
const listaCanciones = [];
// Función para agregar una canción desde el formulario
function agregarCancion() {
    const tituloInput = document.getElementById("titulo").value;
    const generoInput = document.getElementById("genero").value;
    const autorInput = document.getElementById("autor").value;
    const nuevaCancion = new Cancion(tituloInput, generoInput);
    nuevaCancion.setAutor(autorInput);
    listaCanciones.push(nuevaCancion);
    mostrarCanciones();
}
// Función para mostrar las canciones en el DOM
function mostrarCanciones() {
    const listaElement = document.getElementById("lista-canciones");
    if (listaElement) {
        listaElement.innerHTML = ""; // Limpiar lista
        listaCanciones.forEach((cancion) => {
            const cancionElement = document.createElement("p");
            cancionElement.textContent = cancion.mostrarDatos();
            listaElement.appendChild(cancionElement);
        });
    }
}
