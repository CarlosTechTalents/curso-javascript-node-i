// Bucles: repetir un código hasta que se cumpla o se deje de cumplir una condición

console.log(1)
console.log(2)
console.log(3)
console.log('4')
console.log('5')
console.log('6')
console.log('7')
console.log('8')
console.log('9')
console.log('10')

// Representar los números del 1 al 10

for (var i = 1; i <= 10; i++) {
	console.log(i)
}

// Representar en orden inverso

for (var i = 10; i >= 1; i--) {
	console.log(i)
}
// Representar números pares

for (var i = 2; i <= 10; i += 2) console.log(i)

// Valor inicial dependiente de una variable
var n = 5

for (var i = n; i <= 10; i++) {
	console.log(i)
}
console.log('Valor final de i al salir del bucle for: ' + i)
