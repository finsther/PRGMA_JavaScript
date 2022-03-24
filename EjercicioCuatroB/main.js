const obtenerInformacion = (materia, opt) => {
    const materias = {
        fisica: ["Perez", "Pedro", "Maria", "Claudia"],
        programacion: ["Chacon", "Juan", "Pedro", "Maria", "Claudia"],
        logica: ["Jeancarlo", "Juan", "Pedro", "Claudia"],
        quimica: ["Oswaldo", "Juan", "Pedro", "Carlos", "Claudia", "Alley", "Christian"]
    }

    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } if (opt) {
        return materias;
    } else {
        return false;
    }
};

const mostrarInformacion = (materia) => {
    let info = obtenerInformacion(materia);

    if (info !== false) {
        let profesor = info[0][0];
        let alumnos = info[0];
        //quitar el profesor del arreglo
        alumnos.shift();

        document.write(`el profesor de <b>${materia}</b>: <b style="color:red";>${profesor}</b><br>
        los alumnos son: <b style="color:orange";>${alumnos}</b><br><br>`);
    }
};

const cantidadClases = (alumno) => {
    let info = obtenerInformacion(null, true);
    let clasesPresentes = [];
    let cantMaterias = 0;

    for (item in info) {
        if (info[item].includes(alumno)) {
            cantMaterias++;
            clasesPresentes.push(item);
        }
    }
    return `<b style="blue";> ${alumno}</b> esta en <b>${cantMaterias} clases</b><b style="color:blue";>${clasesPresentes}</b><br><br>`;
};

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");

document.write(cantidadClases("Pedro"));
document.write(cantidadClases("Carlos"));
document.write(cantidadClases("Juan"));