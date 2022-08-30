let text = prompt("Introduce una cadena de texto");

alert(checkUppercaseLowercase(text));

function checkUppercaseLowercase(text) {
    let uppercase = false;
    let lowercase = false;

    for (let i = 0; i < text.length; i++) {
        if(text.charAt(i).match(/[a-z]/)) {
            lowercase = true;
        }else if(text.charAt(i).match(/[A-Z]/)){
            uppercase = true;
        }      
    }

    if(uppercase && lowercase) {
        return "La cadena esta formada por una mezcla de mayúsculas y minúsculas";
    }else if (lowercase) {
        return "La cadena esta formada solo por minúsculas";
    }else if(uppercase) {
        return "La cadena esta formada solo por mayúsculas";
    }
}
