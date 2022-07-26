let lado1 = prompt("Ingrese el valor del primer lado");

let lado2 = prompt("Ingrese el valor del segundo lado");

const perimetro = function(lado1, lado2){
    let perimetro = 2 * (lado1 + lado2);
    return perimetro;
}