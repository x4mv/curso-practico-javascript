//Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 


// Triangulo

function perimetroTriangulo( lado1 , lado2 , base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base*altura)/2
} 

//Circulo

// PI
const PI = Math.PI;

// Diametro
function diametroCirculo(radio){
    return radio*2;
}
// Circunferencia 
function perimetroCirculo(radio){
    const  diametro = diametroCirculo(radio);
    return diametro
}

// area
function areaCirculo(radio){
    return (radio * radio ) *PI
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    return alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    return alert(area)
}

function calcularAltura(){
    const lado1 = document.getElementById("inputLado1")
    const value1 = lado1.value;
    const lado2 = document.getElementById("inputLado2")
    const value2 = lado2.value;
    const base = document.getElementById("inputBase")
    const valueBase = base.value;

    if(value1 == value2 && value1 != valueBase){
       const altura = Math.sqrt((value1*value2) - ((valueBase*valueBase)/4))
       alert(altura)
    }else if(value1 == value2 && value1 == valueBase){
        const altura = (Math.sqrt(3)*value1)/2
        alert(altura)
    }else{
        alert("El triangulo no es isosceles")
    }
    
}

