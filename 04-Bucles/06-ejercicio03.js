//////////////////
// Ejercicio 03 //
//////////////////

/* Ejercicio de bucles */

/*
Dados los valores base y altura, dibujar un rectangulo de caracteres con dichos valores.
Por ejemplo: base=10 altura=4 caracter='*'

**********
*        *
*        *
**********

*/

var base, altura, caracter

base = 10
altura = 5
caracter = '*'

var primeraLinea = ''
var segundaLinea = ''

for (var i = 0; i < base; i++) {
	primeraLinea = primeraLinea + caracter
	segundaLinea = segundaLinea + (i === 0 || i === base - 1 ? caracter : ' ')
}

console.log(primeraLinea)
for (var i = 0; i < altura - 2; i++) {
	console.log(segundaLinea)
}
console.log(primeraLinea)
