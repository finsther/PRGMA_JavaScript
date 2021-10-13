//no es necesario definit el tipo de dato, solo basta con asignarlo
//para definir un string puede ser en comillas, comilla simple o comilla invertida
string1 = "cadena de texto 1";
string2 = 'cadena de texto 2';
string3 = `cadena de texto 3`;
//variables de tipo numerico
number1 = 1000;
number2 = 20;
//para valores booleanos puede ser 0 y 1 o true y false
boolean1 = true;
boolean2 = 0;
//variable global
var number = 200;
var nombre = "cesar romero salas";
//contantes no puede cambiar, debe inicializarce cuando se declara
const name = 'cesar';
const pi = 2.141617;
//declarar variable numero
let numero, numero2, numero3;
//inicializar variable numero
numero = 29;
numero2 = 19;
numero3 = 239;

//alert(numero + numero2 + numero3);

let num = 5;
let num2 = "2";

//alert(num * num2);

let entrada = prompt("escribe tu nombre");
alert("hola " + entrada);

//operadores en javaScript
let numOp = 10;

numOp += 5;
document.write("suma" + numOp + "\n");
numOp = 10;

numOp -= 5;
document.write("resta" + numOp + "\n");
numOp = 10;

numOp /= 5;
document.write("divicion" + numOp + "\n");
numOp = 10;

numOp %= 5;
document.write("residuo" + numOp + "\n");
numOp = 10;

numOp **= 5;
document.write("exponente" + numOp + "\n");
