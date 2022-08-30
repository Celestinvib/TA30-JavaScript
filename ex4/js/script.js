var valores = [true, 5, false, "hola", "adios", 2];

let res1 = valores[3] > valores[4] ?  valores[3] : valores[4];

//1.
console.log("El elemento de texto mayor es "+res1);

//2.
console.log("resultado true : (valores[0] != valores[2] ) = "+ (valores[0] != valores[2]));
console.log("resultado false : (valores[0] == valores[2]) ="+ (valores[0] == valores[2]));

//3.
console.log(valores[1]+" + "+ valores[5] +" = " +(valores[1] + valores[5] ));
console.log(valores[1]+" - "+ valores[5] +" = " +(valores[1] - valores[5] ));
console.log(valores[1]+" * "+ valores[5] +" = " +(valores[1] * valores[5] ));
console.log(valores[1]+" / "+ valores[5] +" = " +(valores[1] / valores[5] ));
console.log(valores[1]+" % "+ valores[5] +" = " +(valores[1] % valores[5] ));