const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
};

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
};

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
};

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
};

alert("que operacion deseas realizar?");
let opcion = Number(prompt("1) sumar 2) restar 3) dividir 4) multilicar"));
let n1 = 0;
let n2 = 0;
let resultado;

switch (opcion) {
    case 1:
        n1 = prompt("Sumar primero numero");
        n2 = prompt("Sumar segundo numero");

        resultado = sumar(n1, n2);

        alert(`el resultado de la suma es ${resultado}. 👌`);
        break;
    case 2:
        n1 = prompt("Restar primero numero");
        n2 = prompt("Restar segundo numero");

        resultado = restar(n1, n2);

        alert(`el resultado la resta es ${resultado}. 👌`);
        break;
    case 3:
        n1 = prompt("Dividir primero numero");
        n2 = prompt("Dividir segundo numero");

        resultado = dividir(n1, n2);

        alert(`el resultado la divicion es ${resultado}. 👌`);
        break;
    case 4:
        n1 = prompt("Multiplcar primero numero");
        n2 = prompt("Multiplcar segundo numero");

        resultado = multiplicar(n1, n2);

        alert(`el resultado la multiplicacion es ${resultado}. 👌`);
        break;
    default:
        alert("no existe esa opcion, burro! 🌯🌯🌯");
        break;
}