//pedimos el producto, no convertimos porque
//el producto es un string
let producto = prompt("Ingrese producto");
//se compara la cadena ingresada por el usuario con
//los nombres de los productos
if (producto == "lentejas" || producto == "Lentejas"){
  console.log("No paga IVA");
}
if (producto == "arroz" || producto == "Arroz"){
  console.log("No paga IVA");
}
if (producto == "crema" || producto == "Crema"){
  console.log("Si paga IVA");
}

if (producto == "vino" || producto == "Vino"){
  console.log("Si paga IVA");
}