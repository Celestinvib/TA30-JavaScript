let userNum = prompt("Introduce un número entero");

alert(evenOdd(userNum));

function evenOdd(num) {
    let r = num % 2 == 0 ? 'el número es par' : 'el número es impar';
    return r;
}
