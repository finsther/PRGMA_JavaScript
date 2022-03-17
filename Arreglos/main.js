let array = ["cesar", "alberto", "salas"];
let array2 = [1, 2, 3, 4, 5, 6, 7];


document.write("array original: <b>" + array + "</b><br>");

//let resultado = array.pop();
//let resultado2 = array.shift();
let resultado3 = array.push("agregado","agre");
let resultado4 = array2.reverse();
let resultado5 = array2.join(" - ");

document.write("resultado 5: <b>" + resultado5 + "<br>");
//document.write("el elemento removido: <b style='color:red'>" + resultado2 + "</b><br>");
document.write("el elemento agregado: <b style='color:green'>" + resultado3 + "</b><br>");

document.write("resultado: <b>" + array + "</b>");
document.write("resultado 4: <b>" + resultado4 + "</b><br><br>");
//document.write(array + "</br>");
//document.write(resultado);

//usand filter
let resultado6 = array.filter(elemento => document.write(elemento + "<br>"));

let resultado7 = array.filter(elemento => elemento.length > 4);

document.write("resultado 7: <b>" + resultado7 + "</b>");