var nombre = "cesar romero salas";
var altura = 181;

/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML =
    `<h1>Soy la caja de datos</h1>
    <h2>Min nombre es: ${nombre}</h2>
    <h3>mido: ${altura} cm</h3>`;

if (altura >= 182) {
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
} else {
    datos.innerHTML += `<h1>Eres una persona BAJA</h1>`;
}

for (var i = 2000; i <= 2020; i++) {
    //bloque de instrucciones que se van a repetir i veces
    datos.innerHTML += "<h2>Estamos en el year: " + i;
}
*/

alert("hola mundo!!");

function mostrarNombre(nombre, altura) {
    var datos =
        `<h1>Soy la caja de datos</h1>
        <h2>Min nombre es: ${nombre}</h2>
        <h3>mido: ${altura} cm</h3>`;

    return datos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = mostrarNombre("Loremm Ipsum Dolor Sit Amet", 120);
}

imprimir();

/** arrays */
var nombres = ['Cesar','Alberto','Antonio'];

document.write(`<h1>Listado de nombres con for convencional</h1>`);

for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br/>');
}

document.write(`<h1>Listado de nombres con foreach</h1>`);

nombres.forEach(element => {
    document.write(element + '<br/>');
});