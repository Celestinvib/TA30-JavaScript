var valores = [true, 5, false, "hola", "adios", 2];

//Added due to the request get the values of certain types from the main array
const strings = valores.filter(value => typeof value === "string");
const booleans = valores.filter(value => typeof value === "boolean");
const numbers = valores.filter(value => typeof value === "number");


let res1 = strings[0] > strings[1] ?  strings[0] : strings[1];

//1.
console.log("El elemento de texto mayor es "+res1);

//2.
console.log("resultado true = "+ (booleans[0] != booleans[1]));
console.log("resultado false = "+ (booleans[0] == booleans[1]));

//3.
console.log(numbers[0]+" + "+ numbers[1] +" = " +(numbers[0] + numbers[1] ));
console.log(numbers[0]+" - "+ numbers[1] +" = " +(numbers[0] - numbers[1] ));
console.log(numbers[0]+" * "+ numbers[1] +" = " +(numbers[0] * numbers[1] ));
console.log(numbers[0]+" / "+ numbers[1] +" = " +(numbers[0] / numbers[1] ));
console.log(numbers[0]+" % "+ numbers[1] +" = " +(numbers[0] % numbers[1] ));