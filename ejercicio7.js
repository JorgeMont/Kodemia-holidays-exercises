/*
💪   Ejercicio 7:
    Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:
​
Forma 1/
1
22
333
4444
55555
666666
7777777
88888888
999999999
​
Forma 2:
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/
​
const ascPyramid = () => {
    let pyramid = '';
    for(let i = 1; i<10;i++){
        pyramid += `${i.toString().repeat(i)} \n`;
    }
​
    return pyramid;
}
​
const descPyramid = () => {
    let pyramid = '';
    for(let i = 9; i>=1;i--){
        pyramid += `${i.toString().repeat(i)} \n`;
    }
​
    return pyramid;
}
​
const drawPyramid = () => {
    let finalPyramid = `${ascPyramid()} \n${descPyramid()}`;
    return finalPyramid;
}
​
console.log(drawPyramid());