// 💪   Ejercicio 10:
// Crear un programa que dados los datos de 3 lados de un triangulo, 
//determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno. ​
// input: 3,3,3
// output: Es un triangulo equilatero que tiene como area 4.5

const calcTriangleArea = (sideA, sideB, sideC, triangleType) => {
    
}

const calcTriangleType = (sideA, sideB, sideC) => {
    if(sideA === sideB && sideB === sideC ){
        return 'Equilatero';
    } 
    else if(sideA === sideB || sideA === sideC || sideB === sideC){
        return 'Isoceles';
    }
    else{
        return 'Escaleno';
    }

}

const calcAreaEquilatero = (side) => (side**2 * Math.sqrt(3))/4;

const calcAreaIsoceles = (longestSide, shortestSide) => {
    // const longestSide = [sideA,sideB,sideC].reduce((largest, current)=>current >= largest ? current : largest);
    const height = Math.sqrt(longestSide**2 - (shortestSide**2 / 4));
    // const shortestSide = [sideA,sideB,sideC].reduce((shortest, current)=>current <= shortest ? current : shortest);
    return (shortestSide * height)/2;
}

const calcAreaEscaleno = (sideA, sideB, sideC) => {
    const semiPerimetro = (sideA + sideB + sideC) / 2
    return Math.sqrt(semiPerimetro * (semiPerimetro - sideA) * (semiPerimetro - sideB) * (semiPerimetro - sideC))
}

const calcMax = (arrOfNumbers) => {
    return arrOfNumbers.reduce(
        (largest, current) => current >= largest ? current : largest
        );
}

const calcMin = (arrOfNumbers) => {
    return arrOfNumbers.reduce(
        (shortest, current) => current <= shortest ? current : shortest
        );
}

const calcTriangleInfo = (sideA, sideB, sideC) => {
    let area;
    const triangleType = calcTriangleType(sideA, sideB, sideC);
    if(triangleType === 'Equilatero'){
        //area del equilatero
        area = calcAreaEquilatero(sideA)
    }
    else if(triangleType === 'Isoceles'){
        //area del isoceles
        const longestSide = calcMax([sideA,sideB,sideC]);
        const shortestSide = calcMin([sideA, sideB, sideC]);
        area = calcAreaIsoceles(longestSide, shortestSide);
    }
    else if(triangleType === 'Escaleno'){
        //area del Escaleno
        area = calcAreaEscaleno(sideA, sideB, sideC);
    }

    return `El triangulo es de tipo ${triangleType} y su area es: ${area}`;
}

const unEquilatero = calcTriangleInfo(12,12,12);
console.log(unEquilatero);

const unIsoceles = calcTriangleInfo(10,10,5);
console.log(unIsoceles);

const unEscaleno = calcTriangleInfo(3,5,7);
console.log(unEscaleno);



