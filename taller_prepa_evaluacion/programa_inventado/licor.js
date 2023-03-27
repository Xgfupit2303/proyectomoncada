// Solicitamos al usuario su edad y el tipo de licor que desea comprar
let edad = prompt("¿Cuál es tu edad?");
let tipoLicor = prompt("¿Qué tipo de licor deseas comprar? (1 para cerveza, 2 para vino, 3 para licor fuerte)");

switch (tipoLicor) {
  case "1":
    if (edad >= 18) {
      console.log("Puedes comprar cerveza");
      break;
    }
    console.log("Lo siento, eres menor de edad y no puedes comprar cerveza");
    break;
  case "2":
    if (edad >= 18) {
      console.log("Puedes comprar vino");
      break;
    }
    console.log("Lo siento, eres menor de edad y no puedes comprar vino");
    break;
  case "3":
    if (edad >= 18) {
      console.log("Puedes comprar licor fuerte");
      break;
    }
    console.log("Lo siento, eres menor de 18 años y no puedes comprar licor fuerte");
    break;
  default:
    console.log("El tipo de licor seleccionado no es válido");
    break;
}