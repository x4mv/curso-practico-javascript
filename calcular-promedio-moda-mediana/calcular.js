// Calculando el average

const list=[]

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

function getAverage(){
    const inputAverage = document.getElementById("InputAverage")
    const averageElement = inputAverage.value
    list.push(averageElement)
    AverageUnorderList.innerText = "La lista sin ordenar es:" + list
    list.sort(function(a,b){
        return a-b
    })
    AverageOrderList.innerText = "La lista ordenada es es:" + list
    Average.innerText = "The average is: "+ calculateAvergae(list)
}



// calculando la mediana
const list1=[]


function calculateMedia(list){
    // -------> para saber si es par <---------
    function isPair(number){
        if(number%2 === 0){
            return true;
        }else{
            return false;
        }
    }

    // ----> para saber la posicion de la mediana si es par <-----
    const mitadList1 = list1.length / 2 

    let mediana;

    if(isPair(list1.length)){
        const element1 = list1[mitadList1]; 
        const element2 = list1[mitadList1 -1 ];

        const avergageElements = calculateAvergae([
            element1, 
            element2
        ])

        mediana = avergageElements
    }else{
        mediana = list1[parseInt(mitadList1)]
    }

    return mediana
}


function getMedia(){
    const inputMedia = document.getElementById("InputMedia")
    const mediaElement = inputMedia.value
    list1.push(mediaElement)
    MediaUnorderList.innerText = "La lista sin ordenar es:" + list1
    list1.sort(function(a,b){
        return a-b
    })
    MediaOrderList.innerText = "La lista ordenada es es:" + list1
    Media.innerText = "The media is: "+ calculateMedia(list1)
}

// ---> Calculando la moda <-----
/*
const list2 = []
const ob = {}

function calculateModa(list){
    list.map(
        function(element){
            if(ob[element]){
                ob[element] += 1
            }else {
                ob[element] = 1
            }
        }
    )
    console.log(ob)
}



function getModa(){
    const inputModa = document.getElementById("InputModa")
    const modaElement = inputModa.value
    list2.push(modaElement)
    ModaUnorderList.innerText = "La lista sin ordenar es:" + list2
    list2.sort(function(a,b){
        return a-b
    })
    ModaOrderList.innerText = "La lista ordenada es es:" + list2
    Moda.innerText = "The moda is: "+ calculateModa(list2)
}

*/



const lista = [
    1,2,3,2,2,2,4,5,6,7
]

const object = {}

lista.map(
    function(element){
        if(object[element]){
            object[element] += 1
        }else{
            object[element] = 1
        }
    }
)

const arr = Object.entries(object).sort(
    function (ac ,newac){
        return ac[1] - newac[1]
    }
)

const moda = arr[arr.length-1]
Moda.innerText = moda
