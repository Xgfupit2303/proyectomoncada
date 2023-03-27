let numero1 = parseInt(prompt("Ingrese el numero1"))
let numero2 = parseInt(prompt("Ingrese el numero2"))
let igual = numero1 == numero2
let mayor = numero1 > numero2
let menor = numero1 < numero2

switch (true){
    case igual:
        console.log("Ambos numeros son iguales")
        break;
    case mayor:
        console.log("El primer numero es mayor")
        break;
    case menor:
        console.log("El segundo numero es mayor")
        break;
    default:
        console.log("Cifras invalidas")
        break;
}