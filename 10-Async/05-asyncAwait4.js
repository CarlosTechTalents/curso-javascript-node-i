// Con promesas y async await, dos promesas que tienen un retraso se lanzan en ejecución al mismo tiempo, pero se espera a tener el resultado de la primera antes de presentar el resultado de la segunda. Si el valor de la segunda depende del valor de la primera, se produciría un error.

// Promesa que devuelve el número 1 con retardo
const primera04 = new Promise((response) => {
	setTimeout(() => {
		console.log('- primera desde dentro de la función')
		response(1)
	}, 5000)
})

// Promesa que devuelve el número 2 con retardo
const segunda04 = (valor) => {
	console.log('El parámetro de la segunda función es: ' + valor)
	return new Promise((response) => {
		setTimeout(() => {
			console.log('- segunda desde dentro de la función')
			response(valor + 1)
		}, 2000)
	})
}

// Llamada a la función con async await
async function orden() {
	const uno = await primera04
	console.log(uno)
	console.log(segunda04(uno))
}

orden()
