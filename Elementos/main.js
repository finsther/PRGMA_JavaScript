const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent;
document.write(resultado);

let resultado2 = titulo.innerText;
document.write(`<br>` + resultado2);

let resultado3 = titulo.outerText;
document.write(`<br>` + resultado3);

let resultado4 = titulo.innerHTML;
document.write(`<br>` + resultado4);

let resultado5 = titulo.outerHTML;
document.write(`<br>` + resultado5);