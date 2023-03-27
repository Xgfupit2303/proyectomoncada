let angulo1 = parseFloat(prompt("Ingrese la medida del ángulo 1"))
let angulo2 = parseFloat(prompt("Ingrese la medida del ángulo 2"))
let angulo3 = parseFloat(prompt("Ingrese la medida del ángulo 3"))
let triángulo = angulo1 + angulo2 + angulo3 == 180
switch(triángulo){
    case true:
        console.log("Los tres ángulos corresponden a un triángulo")
        break;
    default:
        console.log("Los tres ángulos no corresponden a un triángulo")
        break;
}