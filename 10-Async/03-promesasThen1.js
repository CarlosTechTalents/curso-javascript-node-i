// Promesas sin argumentos

// Devuelve el número 1 sin retardo
const primera = () => {
	return 1
}

// Devuelve el  número 2 con retardo
const segunda = () => {
	setTimeout(() => {
		return 2
	}, 3000)
}

// Devuelve el número 3 sin retardo
const tercera = () => {
	return 3
}

console.log(primera())
console.log(segunda())
console.log(tercera())
