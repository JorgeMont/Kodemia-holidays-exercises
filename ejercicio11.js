// 💪   Ejercicio 11:
// tomando en cuenta esta estructura de datos vamos a obtener lo sigueinte:
// -Promedio por materias

const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
       
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
       
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
  ];


const getEverySignature = (data) => {
  const arrayOfSignatures = [];

  data.forEach(mentorData => {
    mentorData.scores.forEach(grade => {
      if(!arrayOfSignatures.includes(grade.signature)){
        arrayOfSignatures.push(grade.signature);
      }
    })
  });

  return arrayOfSignatures;
}


const getAverageBySubject = (data) => {
  const arrayOfSignatures = getEverySignature(data);

  //Obtener arreglo de puras materias
  return arrayOfSignatures.map(signature => {
    let sumOfGrades = 0;
    let numOfGrades = 0;
    data.forEach(mentorData => {
      mentorData.scores.forEach(grade => {
        if(grade.signature === signature){
          sumOfGrades += grade.score;
          numOfGrades++;
        }
      });
    });
    return {signature: signature, average: sumOfGrades/numOfGrades}
  })

};

const result = getAverageBySubject(mentorsArray);
console.log(result);

  //   mentorData.scores.forEach(grade => {
  //     if(!arrOfSubjects.includes(grade.signature)){
  //       arrOfSubjects.push(grade.signature);
  //     }
  //   });
  // });
  // return arrOfSubjects.map(subject => {
  //   let sumOfGrades = 0;
    
  //   data.forEach(mentorData => {
  //     mentorData.scores.forEach(grade => {
  //       console.log(grade);
  //       if(grade.signature === subject){
  //         sumOfGrades += grade.score;
  //       }
  //       // console.log(grade.signature);
  //     })
  //   })
  //   return {subject: subject, average: sumOfGrades}
  // });

  //