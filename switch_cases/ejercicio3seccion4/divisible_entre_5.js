let numero = parseInt(prompt("Ingrese el numero a analizar"))
let divisible = numero % 5 == 0

switch (divisible){
    case true:
        console.log("El numero es divisible por 5")
        break;
    default:
        console.log("El numero no es divisble por 5")
}