//helpers 
function isPair(number){
    return (number % 2 === 0)
  }
  
  function calculateAvergae(list){
      const addList = list.reduce(
          function (acumulatedValue = 0, newElement){
                  const addedList = parseInt(acumulatedValue) + parseInt(newElement)
              return addedList
          }
      );
       const average = addList / list.length;
      return average 
  } 

//Calculadora de mediana

function medianaSalary(list){
    const mitad = parseInt(list.length / 2)

    if(isPair(list.length)){
        const personMid = list[mitad-1]
        const personMid1 = list[mitad]

        const mediana = calculateAvergae([personMid,personMid1])
        return mediana

    }else{
        const personMid = list[mitad]
        return personMid
    }
}

// Mediana General
const salaryCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salaryColSorted = salaryCol.sort(
    function(ac, newac){
        return ac - newac;
    }
)

const medianaGeneralCol = medianaSalary(salaryColSorted)

// Mediana del top 10%
/* 
   ( P * (100 -d ) )/ 100
*/
const spliceStart = (salaryColSorted.length * 90)/100;
const spliceCount = salaryColSorted.length - spliceStart;

const salaryTenP = salaryColSorted.splice(
    spliceStart, 
    spliceCount
    )





const medianaTop10Col = medianaSalary(salaryTenP)

console.log({
    medianaGeneralCol,
    medianaTop10Col
})