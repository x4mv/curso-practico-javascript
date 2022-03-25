const cupones = [{value:"vale una remera", discount:20}, {value: "vale un pantalon", discount: 30}, {value: "vale una campera", discount: 50}]

function applyDiscount(){
    const precio = document.getElementById("InputPrice")
    const valuePrecio = precio.value;

    const cupon = document.getElementById("InputDiscount")
    const valueCupon = cupon.value;

     switch(valueCupon){
        case cupones[0].value:
            const payment = (valuePrecio * (100-cupones[0].discount))/100
            ResultPrice.innerText = "El precio a pagar es : $"+ payment;
            break;
        case  cupones[1].value:
            const payment1 = (valuePrecio * (100-cupones[1].discount))/100
            ResultPrice.innerText = "El precio a pagar es : $"+ payment1;
            break;
        case cupones[2].value:
            const payment2 = (valuePrecio * (100-cupones[2].discount))/100
            ResultPrice.innerText = "El precio a pagar es : $"+ payment2;
            break;
        default:
            ResultPrice.innerText = "No hay descuento el pago es : $"+ valuePrecio;
     }
} 
