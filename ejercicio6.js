/*
💪   Ejercicio 6:
    Crear un programa que permita a una cadena de texto mostrar el caracter '-' entre cada caracter de la cadena.
    Create a function that allows to show the character '-' between every character in the string
*/

const addOverLine = (str) => {
    str = str.split('');
    return str.join('-');
}

const result = addOverLine('Hey there how is it going?');
console.log(result);