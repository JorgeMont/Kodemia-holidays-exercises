/*
💪   Ejercicio 4:
    Comparar 2 string, y determinar cual de los dos es el más largo
​
    input: “string 1”, “Some large string”
    Output: “el string {string 1} es el más largo”
    */

const compareStrings = (str1, str2) => {
    let result;
    if(str1.length > str2.length){
        result = `El string ${str1} es el mas largo`;
    }
    else if(str2.length > str1.length){
        result = `El string ${str2} es el mas largo`;
    }
    else{
        result = 'Ambos son del mismo tamano';
    }
    return result;
}

const result = compareStrings('hola', 'holaaaaa');
console.log(result);