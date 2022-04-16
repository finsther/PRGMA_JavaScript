const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true");
titulo.setAttribute("dir", "rtl");
//titulo.setAttribute("hidden", "true");
titulo.setAttribute("tabindex", "0");
titulo.setAttribute("title", "LOL probando desde java los titles");

//atributos de inputs
const input = document.querySelector(".input-normal");
const inputObligatorio = document.querySelector("#input-obligatorio");

document.write(input.className);
document.write(input.value);
//cambiar el atributo tipo
//input.type = "color";
document.write(input.type);

inputObligatorio.minLength = 2;
inputObligatorio.placeholder = "insertar tu nombre aqui";
inputObligatorio.required = " ";

// atributos de estilo
const subtitulo = document.querySelector(".subtitulo");
subtitulo.style.color = "yellow";
subtitulo.style.padding = "30px";
subtitulo.style.backgroundColor = "green";

const nombreClase = "clase2";
let valorClase = subtitulo.classList.item(1);
let existeClase = subtitulo.classList.contains(nombreClase);

document.write(`<br>` + valorClase);

if (existeClase) {
    document.write(`<br> la clase con nombre ` + nombreClase + ` existe`);
} else {
    document.write(`<br> la clase con nombre ` + nombreClase + ` NO existe!!!`);
}
//usar toggle para en caos que un elemento no tenga el nombre de la clase lo agrega o lo quita de caso contrario
subtitulo.classList.toggle("nuevaClase");
//reemplazar una clase por otro
subtitulo.classList.replace("nuevaClase", "chico");