/*
💪   Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: ‘Programación Javascript’
    Output: ‘Programación’
*/

const getLongest = (str1, str2) => {
    let longest;
    longest = str1.length > str2.length ? str1 : str2;
    
    if(str1.length === str2.length){
        return `Ambos strings son del mismo tamaño`;
    }
    return `El string más largo es ${longest}`;
}

// const result = getLongest('hola', 'holaaaaa');
const result = getLongest('hola', 'hola');
console.log(result);