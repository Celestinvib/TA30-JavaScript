let text = prompt("[¿Es un Palíndromo?]\nIntroduce una cadena de texto");

alert(checkPalindrome(text));

function checkPalindrome(text) {
   
   let textReverted = text
   .split("") //Transoform the string into a new array with the values of the text passed throgh param (ex ['T','E','X','T'])
   .reverse() // Reverse the order of the elements of the array -> ['T','X','E','T'] (default array function)
   .join(""); //Join the elemnts into a string (default array function)

   let r = textReverted == text ? 'La cadena es un palíndromo' : 'La cadena no es un palíndromo';
   return r; 
}
