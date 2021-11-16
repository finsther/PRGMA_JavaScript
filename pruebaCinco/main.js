function saludar() {
    let respuesta = prompt("hola usuario como fue tu dia?");

    if (respuesta == "bien") {
        alert("me alegro");
    } else {
        alert("que pena");
    }
}

saludar();

//otra manera de declarar una funcion es la siguente
saludar = function () {
    alert("otra manera de declarar una funcion");
}

saludar();

//funciones con return
function saludarReturn() {
    return "la funcion se ejecuto correctamente";
}

let saludo = saludarReturn();

document.write(saludo);


//funciones con parametros
//let num1 = 12;
//let num2 = 33;

function sumar(num1, num2) {
    let res = num1 + num2;
    document.write("<br>");

    return res;
}

document.write(sumar(22, 23));

//funciones flecha
const saludarF = (nombre, edad) => {
    document.write(`hola ${nombre}, tu edad es ${edad}`);
}

saludarF("cesar", 28);