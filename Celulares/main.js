class Celular {
    constructor(color, peso, resolucion, megapixeles, memoria, almacenamiento) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.megapixeles = megapixeles;
        this.memoria = memoria;
        this.almacenamiento = almacenamiento;
        this.encendido = false;
    }

    powerUpButton() {
        if (this.encendido === false) {
            alert("el celular esta encendiendo ...");
            this.encendido = true;
        } else {
            alert("el celular se va apagar");
        }
    }

    reboot() {
        if (this.encendido === false) {
            alert("el celular esta reiniciando esto tomara un momento ...");
            this.encendido = true;
        } else {
            alert("enciende el telefono!");
        }
    }

    takePicture() {
        alert(`capturando imagen en resolucion ${this.megapixeles}`);
    }

    captureVideo() {
        alert(`grabando video en resolucion ${this.megapixeles}`);
    }

    mostrarInfo() {
        return `Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion: <b>${this.resolucion}</b></br>
        Megapixeles: <b>${this.megapixeles}</b></br>
        Memoria: <b>${this.memoria}</b></br>
        Almacenamiento: <b>${this.almacenamiento}</b></br>`;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, resolucion, megapixeles, megapixelesFrontal, memoria, almacenamiento) {
        super(color, peso, resolucion, megapixeles, memoria, almacenamiento);
        this.megapixelesFrontal = megapixelesFrontal;
    }

    captureSlowVideo() {
        alert("estas grabando en slow motion");
    }

    reconocimientoFacial() {
        alert("inicializando reconocimiento facial");
    }
    // override
    mostrarInfo() {
        return `Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion: <b>${this.resolucion}</b></br>
        Megapixeles Camara Trasera: <b>${this.megapixeles}</b></br>
        Memoria: <b>${this.memoria}</b></br>
        Almacenamiento: <b>${this.almacenamiento}</b></br>
        Almacenamiento: <b>${this.almacenamiento}</b></br>
        Megapixeles Camara Frontal: <b>${this.megapixelesFrontal}</b>`;
    }

}

const celular1 = new Celular("gris", "230g", "5 pulgadas", "12Mpx", "2048MB", "8GB");
const celular2 = new Celular("negro", "233g", "4.8 pulgadas", "9Mpx", "1024MB", "32GB");

const celular3 = new CelularAltaGama("negro", "233g", "4.8 pulgadas", "9Mpx", "2Mpx", "1024MB", "32GB");

celular1.powerUpButton();
celular1.takePicture();
celular1.captureVideo();
celular1.reboot();

document.write(
    `${celular1.mostrarInfo()} <br>
     ${celular2.mostrarInfo()} <br>
     ${celular3.mostrarInfo()} <br>`);

