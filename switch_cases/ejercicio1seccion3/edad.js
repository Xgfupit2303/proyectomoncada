let edad = prompt("Ingrese edad");
let mayor = edad >= 18;

switch (mayor){
    case true:
        console.log("Ud es mayor de edad");
        break;
    default:
        console.log("Ud es menor de edad");
        break;
}