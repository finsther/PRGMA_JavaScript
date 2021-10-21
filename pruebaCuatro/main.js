let array = ["cesar", 28, "mexico", "programador"];
let frutas = ["manzana", "platano", "mango"];

document.write(array);

// array asociativo
let pc = {
    nombre: "CesarPC",
    procesador: "Ryzen 5",
    memoria: "16GB",
    disco: "Barracuda 1TB"
};

document.write(pc.nombre);

//bucles
let numero = 0;

while (numero <= 5) {
    numero++;

    document.write(numero + "<br>");

    if (numero == 2) {
        break;
    }
}

do {
    document.write(numero);
    numero++;
} while (numero <= 5);

document.write("<br>imprimiendo desde los bucles for<br>");

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    document.write(element);

}

array.forEach(element => {
    document.write(element);
});

/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}

for (const iterator of object) {

}
*/

document.write("<br>imprimiendo desde los bucles for label<br>");

labeltest:
for (const key in array) {
    if (key == 2) {
        for (const iterator of frutas) {
            document.write(iterator + "<br>");
            break labeltest;
        }
    } else {
        document.write(array[key] + "<br>");
    }
}