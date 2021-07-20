// Promesas sin argumentos

// Devuelve el número 1 sin retardo
const primera = () => {
	console.log('- primera desde dentro de la función')
	return 1
}

// Devuelve el  número 2 con retardo
const segunda = new Promise((response) => {
	setTimeout(() => {
		console.log('- segunda desde dentro de la función')
		response(2)
	}, 5000)
})

// Devuelve el  número 3 con retardo menor que la segunda
const tercera = new Promise((response) => {
	setTimeout(() => {
		console.log('- tercera desde dentro de la función')
		response(3)
	}, 2000)
})

console.log(primera())

async function orden() {
	console.log(await segunda)
	console.log(await tercera)
}

orden()
