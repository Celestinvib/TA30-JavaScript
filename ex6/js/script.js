var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

let dniNumbersUser = prompt("Introduce los numeros del DNI:");

if(dniNumbersUser > 0 && dniNumbersUser < 99999999) {
    let dniLetterUser = prompt("Introduce la letra correspondiente del DNI:");

    let realLetter = letras[dniNumbersUser % 23] ;

    if(dniLetterUser == realLetter) {
        alert("El numero introducido y la letra de DNI introducidos son correctos")
    }else {
        alert("L1a letra que se ha introducido no es correcta")
    }

}else {
 alert("El numero proporcionado no es válido!")   
}

