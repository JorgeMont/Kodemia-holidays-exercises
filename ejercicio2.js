// 💪   Ejercicio 2:
//     Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.

const countVowels = (name) => {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    name = name.replaceAll(' ','');
    name = name.toLowerCase();

    name.split('').forEach(letter => {
        if(vowels.includes(letter)){
            vowelCount++;
        }
    });

    return `Tu nombre tiene ${vowelCount} vocales`
}

const myName = countVowels('Jorge Monterrosas Ramirez');
console.log(myName);