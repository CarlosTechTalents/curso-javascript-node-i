//////////////////
// Ejercicio 01 //
//////////////////

//Se tiene los siguientes datos:

var pesoLuis = 72
var alturaLuis = 1.72

var pesoCarlos = 89
var alturaCarlos = 1.75

/*Utilizar la siguiente formula para calcular el IMC (Índice de masa corporal) de Luis y de Carlos, 
  IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos 
  es superior al de Luis.*/

//Solucion:
var IMCLuis = pesoLuis / (alturaLuis * alturaLuis)
var IMCCarlos = pesoCarlos / (alturaCarlos * alturaCarlos)

var comparacion = IMCCarlos > IMCLuis

console.log('IMC de Carlos:' + IMCCarlos)
console.log('IMC de Luis:' + IMCLuis)

console.log('¿El IMC de Carlos, es Superior al de Luis?:' + comparacion)
