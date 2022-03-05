class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} anhios y soy de color ${this.color}`;
    }

    verInformacion() {
        document.write(this.informacion + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = null;
    }

    ladrar() {
        alert("Waff, waff!");
    }

    set setRaza(value) {
        this.raza = value;
    }

    get getRaza() {
        return this.raza;
    }
}

const perro = new Perro("perro", 3, "cafe", "doberman");
const gato = new Animal("gato", 1, "gris");
const pajaro = new Animal("pajaro", 8, "blanco");

// document.write(perro.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");

perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

perro.ladrar();