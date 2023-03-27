let numero = parseInt(prompt("Ingrese el numero"))
let par = numero % 2 == 0

switch (par){
    case true:
        console.log("El numero es par")
        break;
        default:
        console.log("El numero no es par")
        break;
}