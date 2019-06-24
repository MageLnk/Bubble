/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let arraycartas = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
console.log(arraycartas[randomcards(0, arraycartas.length)]);
let arraynueva = [];
// Obtener el valor random
function randomcards(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Botón drawn
document.querySelector("#Draw").addEventListener("click", funciondraw);
function funciondraw() {
  let total = document.querySelector("#Ccartas").value;
  arraynueva = [];
  document.querySelector(".todaslascartasrandom").innerHTML = "";
  // Function para crear la nueva array random
  for (let i = 0; i < total; i++) {
    let aux = arraycartas[randomcards(0, arraycartas.length)];
    arraynueva.push(aux);
    document.querySelector(".todaslascartasrandom").innerHTML += aux + " ";
  }
}
// Boton Sort burbuja
document
  .querySelector("#Sorted")
  .addEventListener("click", funcionburbujasorted);
// Sort burbuja
function funcionburbujasorted() {
  let muralla = arraynueva.length;
  for (let x = 0; x < muralla; x++) {
    console.log("Primer loop", arraynueva);
    for (let y = 0; y < muralla; y++) {
      console.log("Segundo loop", arraynueva);
      let aux3 = olakase(arraynueva[y]);
      let aux4 = olakase(arraynueva[y + 1]);
      if (aux3 > aux4) {
        let aux2 = arraynueva[y];
        arraynueva[y] = arraynueva[y + 1];
        arraynueva[y + 1] = aux2;
      }
    }
  }
  console.log(arraynueva);
}
// Función para darle valor 11, 12 y 13 a J, Q y K para la validación.
function olakase(a) {
  switch (a) {
    case "J":
      return 11;
      break;
    case "Q":
      return 12;
      break;
    case "K":
      return 13;
      break;
    default:
      return parseInt(a);
  }
}
