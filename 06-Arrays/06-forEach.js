// Método forEach () para recorrer un array

const array1 = ['a', 'b', 'c']

array1.forEach((element, index) => console.log(index + ': ' + element))

// Suma todos los elementos de un array

const numeros = [3, 7, 2, 8, 9, 5, 2]
let suma = 0
console.log('\n\n')
numeros.forEach((numero) => {
	console.log('+' + numero)
	suma += numero
})
console.log('----')
console.log(suma)
