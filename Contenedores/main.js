const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstChild;
const primerElementoHijo = contenedor.firstElementChild;
const hijos = contenedor.childNodes;

console.log(primerHijo);
console.log(primerElementoHijo);
console.log(hijos);

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo, h2_antiguo);

let respuesta = contenedor.hasChildNodes();

if (respuesta) {
    document.write("el elemento tiene hijos");
} else {
    document.write("el elemento NO tiene hijos");
}