/*
💪   Ejercicio 9:
​
Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.
​
input :
const example = [
    'Bacon ipsum dolor amet corned',
    'Buffalo pork ball tip',
    'Leberkas short loin pork loin,
]
​
number: 4
​
output: [
    'Baco',
    'Buff',
    'Lebe'
]
*/

const cutStrings = (arrOfStrings, limit) =>{
    return arrOfStrings.map(element => element.slice(0,limit));
}

const example = [
    'Bacon ipsum dolor amet corned',
    'Buffalo pork ball tip',
    'Leberkas short loin pork loin'
];

const result = cutStrings(example, 4);
console.log(result);