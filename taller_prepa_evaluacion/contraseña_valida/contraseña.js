let contraseña = prompt("Ingrese una contraseña");
let verfique = prompt("Verifique la contraseña");
let igual = !(contraseña == verifique)

switch (igual) {
    case true:
        console.log(" Las Contraseñas no son iguales");
        break;

    default:
        console.log("Las contraseñas son iguales");
        break;
}