/* Comprobar si existe un elemento en un array */

const arr1 = ['Javier', 'Andriy', 'Ohad', 'Carlos']

console.log(
	arr1.some((item) => {
		console.log(item)
		let encontrado = item === 'Javier'
		console.log(encontrado)
		return encontrado
	})
)

console.log(arr1.some((item) => item === 'Javier'))

/* Comprobar si un elemento de un array existe en otro array */
const arr2 = ['Pedro', 'Ohad', 'María', 'Jeff']

const foundArrayInArray = arr1.some((item) => arr2.indexOf(item) >= 0)

console.log(foundArrayInArray)

/* Comprobar cualquier elemento de un array en un string */
const str2 = 'Pedro Ohad María Jeff'
const foundArrayInString = arr1.some((item) => str2.indexOf(item) >= 0)
console.log(foundArrayInArray)

/* Comprobar cualquier palabra de una string en otra string */
const palabrasClave = 'veloz negro feo'
const texto = 'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'

const delimitador = ' '
const arrayPalabrasClave = palabrasClave.toLowerCase().trim().split(delimitador)

console.log(arrayPalabrasClave)

const hayPalabrasClaveEnTexto = arrayPalabrasClave.some((item) => texto.toLowerCase().indexOf(item) >= 0)
console.log(hayPalabrasClaveEnTexto)
