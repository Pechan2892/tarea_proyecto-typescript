// Clase Cancion como en el paso anterior
class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public mostrarDatos(): string {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`;
    }
}

// Arreglo para almacenar las canciones
const listaCanciones: Cancion[] = [];

// Función para agregar una canción desde el formulario
function agregarCancion() {
    const tituloInput = (<HTMLInputElement>document.getElementById("titulo")).value;
    const generoInput = (<HTMLInputElement>document.getElementById("genero")).value;
    const autorInput = (<HTMLInputElement>document.getElementById("autor")).value;

    const nuevaCancion = new Cancion(tituloInput, generoInput);
    nuevaCancion.setAutor(autorInput);

    listaCanciones.push(nuevaCancion);
    mostrarCanciones();
}

// Función para mostrar las canciones en el DOM
function mostrarCanciones() {
    const listaElement = document.getElementById("lista-canciones");
    if (listaElement) {
        listaElement.innerHTML = "";  // Limpiar lista
        listaCanciones.forEach((cancion) => {
            const cancionElement = document.createElement("p");
            cancionElement.textContent = cancion.mostrarDatos();
            listaElement.appendChild(cancionElement);
        });
    }
}
