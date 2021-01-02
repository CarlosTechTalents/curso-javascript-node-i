// Números del 1 al 10 con un bucle do..while

var i = 1
do {
	console.log(i)
	i++
} while (i <= 10)

console.log('Valor final de i al salir del bucle do while: ' + i)

// La condición se evalua al finalizar el bucle, por lo tanto siempre se ejecuta al menos una vez

i = 13
do {
	console.log(i)
	i++
} while (i <= 10)

console.log('Valor final de i al salir del bucle do while: ' + i)
