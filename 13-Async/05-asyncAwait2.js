// Con promesas y async await, un proceso que tiene un retraso espera a que finalice para dar un dato válido.

// Promesa que devuelve el número 1 con retardo
const primera02 = new Promise((response) => {
	setTimeout(() => {
		console.log('- primera desde dentro de la función')
		response(1)
	}, 3000)
})

// Llamada a la función con async await
async function orden() {
	console.log(await primera02)
}

orden()
