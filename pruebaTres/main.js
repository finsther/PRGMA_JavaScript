let personaje1 = "Cofla";
let personaje2 = "Roberto";
let personaje3 = "Pedro";

let dineroC = prompt(`de cuanto dinero dispone ${personaje1}?`);
let dineroR = prompt(`de cuanto dinero dispone ${personaje2}?`);
let dineroP = prompt(`de cuanto dinero dispone ${personaje3}?`);

dineroC = parseInt(dineroC);
dineroR = parseInt(dineroR);
dineroP = parseInt(dineroP);

if (dineroC > 0.6 && dineroC < 1) {
    alert(`${personaje1}, comprate el helado de agua`);
    alert(`te sobrarian ` + (dineroC - 0.6));
} else if (dineroC >= 1 && dineroC < 1.6) {
    alert(`${personaje1}, comprate el helado de crema`);
    alert(`te sobrarian ` + (dineroC - 1));
} else if (dineroC >= 1.6 && dineroC < 1.7) {
    alert(`${personaje1}, comprate el helado de heladix`);
    alert(`te sobrarian ` + (dineroC - 1.6));
} else if (dineroC >= 1.7 && dineroC < 1.8) {
    alert(`${personaje1}, comprate el helado de heladovich`);
    alert(`te sobrarian ` + (dineroC - 1.7));
} else if (dineroC >= 1.8 && dineroC < 2.9) {
    alert(`${personaje1}, comprate el helado de heraldo`);
    alert(`te sobrarian ` + (dineroC - 1.8));
} else if (dineroC >= 2.9) {
    alert(`${personaje1}, helado con confites o el bote de 1/4kg`);
    alert(`te sobrarian ` + (dineroC - 2.9));
} else {
    alert(`lo siento ${personaje1} no te ajusta para ninguno`);
}