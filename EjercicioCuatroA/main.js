class Calculadora {

    constructor() {
    }

    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    potenciar(num1, num2) {
        return Math.pow(num1, num2);
    }

    raizCuadrada(num1) {
        return Math.sqrt(num1);
    }

    raizCubica(num1) {
        return Math.cqrt(num1);
    }
}

const calculadora = new Calculadora();

alert("que operacion deseas realizar?");
let opcion = Number(prompt("1) sumar 2) restar 3) dividir 4) multilicar 5) potenciar 6) raiz cuadrada 7) raiz cubica"));
let n1 = 0;
let n2 = 0;
let resultado;

switch (opcion) {
    case 1:
        n1 = prompt("Sumar primero numero");
        n2 = prompt("Sumar segundo numero");

        resultado = calculadora.sumar(n1, n2);

        alert(`el resultado de la suma es ${resultado}. 👌`);
        break;
    case 2:
        n1 = prompt("Restar primero numero");
        n2 = prompt("Restar segundo numero");

        resultado = calculadora.restar(n1, n2);

        alert(`el resultado la resta es ${resultado}. 👌`);
        break;
    case 3:
        n1 = prompt("Dividir primero numero");
        n2 = prompt("Dividir segundo numero");

        resultado = calculadora.dividir(n1, n2);

        alert(`el resultado la divicion es ${resultado}. 👌`);
        break;
    case 4:
        n1 = prompt("Multiplcar primero numero");
        n2 = prompt("Multiplcar segundo numero");

        resultado = calculadora.multiplicar(n1, n2);

        alert(`el resultado la multiplicacion es ${resultado}. 👌`);
        break;
    case 5:
        n1 = prompt("Numero para potenciar");
        n2 = prompt("Potencia");

        resultado = calculadora.potenciar(n1, n2);

        alert(`el resultado la multiplicacion es ${resultado}. 👌`);
        break;
    case 6:
        n1 = prompt("Raiz cuadrada de");

        resultado = calculadora.raizCuadrada(n1);

        alert(`el resultado la raiz cuadrada es ${resultado}. 👌`);
        break;
    case 7:
        n1 = prompt("Raiz cubica de");

        resultado = calculadora.raizCubica(n1);

        alert(`el resultado la raiz cubica es ${resultado}. 👌`);
        break;
    default:
        alert("no existe esa opcion, burro! 🌯🌯🌯");
        break;
}