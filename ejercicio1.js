// 💪   Ejercicio 1:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre

const getNameLength = (name) => {
    name = name.replaceAll(' ', '');
    return `Tu nombre tiene ${name.length} caracteres`;
}

const myName = getNameLength('Jorge Monterrosas Ramirez');
console.log(myName);