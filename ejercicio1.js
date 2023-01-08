// 💪   Ejercicio 1:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre

const getNameLength = (name) => {
    let getNameLength = 0;
    name = name.replaceAll(' ', '');
    return `Tu nombre tiene ${name.length} caracteres`;
}

const myName = getNameLength('Jorge Monterrosas Ramirez');
console.log(myName);