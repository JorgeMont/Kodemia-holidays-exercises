/*
💪   Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: ‘Programación Javascript’
    Output: ‘Programación’
*/

const getLongest = (str1, str2) => {
    let result;
    if(str1.length > str2.length){
        return str1;
    }
    else if(str2.length > str1.length){
        return str2;
    }
    else{
        result = 'Ambos son del mismo tamano';
    }
    return result;
}

const result = getLongest('hola', 'holaaaaa');
console.log(result);