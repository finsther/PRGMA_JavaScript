let free = true;
let cover = 100;

const validarCliente = (time) => {
    let edad = prompt("Cual es tu edad?");

    if (edad > 18) {
        if (time >= 2 && time < 7 && free == true) {
            alert("Puedes pasar gratis, porque eres la primera persona despues de las 2AM");
            free = false;
        } else {
            alert(`Son las ${time}:00HRS puedes pasar por un costo de cover ${cover}, tomalo o dejalo 😊`);
        }
    } else {
        alert("Mira papu de papus..., eres menor de edad asi que por ende no puedes pasar, no la hagas de tos!");
    }
};

//llamar la funcion
//validarCliente(23);
//validarCliente(3);

let cantidad = prompt("Cuantos alumnos son?");
let alumnos = [];

for (let i = 0; i < cantidad; i++) {
    alumnos[i] = [prompt("nombre del alumno " + (i + 1)), 0];
}

const tomasAsistencia = (nombre, alumno, dia) => {
    let presencia = prompt(`Asistencia ${nombre}, dia ${dia + 1}`);

    if (presencia == 'p' || presencia == 'P') {
        alumnos[alumno][1]++;
    }
};

for (let i = 0; i < 30; i++) {
    for (const alumno in alumnos) {
        tomasAsistencia(alumnos[alumno][0], alumno, i);
    }
}

for (const alumno in alumnos) {
    let resultado =
        `Alumno: <b>${alumnos[alumno][0]}</b> <br>
        Presentes: <b>${alumnos[alumno][1]}</b> <br>
        Ausencias: <b>${30 - alumnos[alumno][1]} </b>`;

    if (30 - alumnos[alumno][1] > 18) {
        resultado += "reprobado por inasistencias<br>";
    } else {
        resultado += "<br>";
    }

    document.write(resultado);
}