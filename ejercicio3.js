// 💪   Ejercicio 3:
//     Del texto: 
//     “Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado”
    
//     - Contar cuántas veces se usa la palabra “estudiante” y reemplazar todas las coincidencias 
//         por la palabra “Koder”, 
//     - y mostrar el mensaje de nuevo al usuario

const phrase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';

const countAndReplace = (text, oldWord,newWord) => {
    let countWord = 0;
    text = text.split(' ');
    text.forEach(letter => {
        if(letter === oldWord){
            countWord++
        }
    });
    text = text.join(' ').replaceAll(oldWord,newWord);
    return `La palabra ${oldWord} aparecia ${countWord} veces y el nuevo texto es: ${text}`;
    
}

const newText = countAndReplace(phrase, 'estudiante', 'Koder');
console.log(newText);