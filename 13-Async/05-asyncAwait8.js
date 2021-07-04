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

// Devuelve el número 4 con retraso y espera a tener un dato válido en el parametro de entrada
const cuarta = (valor) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('- cuarta desde dentro de la función')
			resolve(4)
		}, 4000)
	}, valor)
}

// Devuelve el número 5 sin retardo
const quinta = () => {
	console.log('- quinta desde dentro de la función')
	return 5
}

console.log(primera())

async function orden() {
	const respuesta2 = await segunda
	console.log(respuesta2)
	console.log(await cuarta(respuesta2))
	console.log(quinta())
}

orden()
