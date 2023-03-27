let numero = parseInt(prompt("Ingrese el numero a analizar"))
let primo = numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13

switch (primo){
    case true:
        console.log("Este número es un número primo");
        break;
        
    default:
        console.log("Este número no es un número primo");
        break;
}