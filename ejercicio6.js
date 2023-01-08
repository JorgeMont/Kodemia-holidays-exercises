/*
💪   Ejercicio 6:
    Crear un programa que permita a una cadena de texto mostrar el caracter '-' entre cada caracter de la cadena.
*/

const addOverLine = (str) => {
    str = str.split('');
    return str.join('-');
}

const result = addOverLine('Hey there how is it going?');
console.log(result);