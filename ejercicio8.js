/*
💪   Ejercicio 8:
Dado una array de numeros. 
const array = [1,6,76,2,8,3,9,34,6]
-obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.

Given the following array
const array = [1,6,76,2,8,3,9,34,6]
Show the biggest, smallest, average and the sum of all numbers
*/
const array = [1,6,76,2,8,3,9,34,6];

const getBiggest = (arr) => {
return arr.reduce((prevNum, num)=>num >= prevNum ? num : prevNum);
}

const getSmallest = (arr) => {
    return arr.reduce((prevNum, num)=>num <= prevNum ? num : prevNum);
}

const getSumOfAll = (arr) => {
    return arr.reduce((prevNum, num)=> num + prevNum, 0);
}

const getAverage = (arr) => {
    return getSumOfAll(arr)/arr.length;
}

const biggest = getBiggest(array);
const smallest = getSmallest(array);
const sumOfAll = getSumOfAll(array);
const average = getAverage(array);

console.log(biggest);
console.log(smallest);
console.log(sumOfAll);
console.log(average);
