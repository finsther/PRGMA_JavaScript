let cadena = "cadena de prueba";
let cadena2 = "de";
let cadena3 = "hola, como, estas";

let res0 = cadena.concat(cadena2);

let res1 = cadena.startsWith(cadena2);
let res2 = cadena.includes(cadena2);
let res3 = cadena.indexOf(cadena2);
let res4 = cadena.lastIndexOf(cadena2);

let res5 = cadena.padStart(20, "+");
let res6 = cadena.padEnd(50, "+");
let res7 = cadena.repeat(2);

let res8 =  cadena3.split(",");
let res9 =  cadena3.substring(0, 4);

document.write(res0 + '<br>');
document.write(res5 + '<br>');
document.write(res6 + '<br>');
document.write(res7 + '<br>');
document.write('Usando split <br>');
document.write(res8 + '<br>');
document.write(res9 + '<br>');