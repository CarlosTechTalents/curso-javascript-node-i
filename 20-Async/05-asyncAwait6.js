// Con promesas y async await, dos promesas que tienen un retraso se lanzan en ejecución al mismo tiempo, pero se espera a tener el resultado de la primera antes de presentar el resultado de la segunda. Se tiene que esperar a que el valor de la valor de la primera sea estable para llamar a la segunda o de los contrario se produciría un error.

// Promesa que devuelve el número 1 con un retardo
const primera05 = new Promise((response) => {
	setTimeout(() => {
		console.log('- primera desde dentro de la función')
		response(1)
	}, 5000)
})

// Promesa que incrementa el valor recibido
const segunda05 = (valor) => {
	console.log('El parámetro de la segunda función es: ' + valor)
	return new Promise((response) => {
		setTimeout(() => {
			console.log('- segunda desde dentro de la función')
			response(++valor)
		}, 3000)
	}, valor)
}

// Llamada a la función con async await
async function orden() {
	const uno = await primera05
	console.log(uno)
	let dos = await segunda05(uno)
	console.log(dos)
	dos++
	console.log(dos)
	return `Procesos en orden: ${uno} + ${dos} = ${uno + dos}`
}

orden()
	.then((res) => {
		console.log(res)
	})
	.catch(() => {
		console.log('Error')
	})
