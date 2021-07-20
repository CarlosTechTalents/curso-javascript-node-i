// Sin promesas ni async await, un proceso que tiene un retraso da error.

// Función que devuelve el número 1 con retardo
const primera01 = () => {
	setTimeout(() => {
		console.log('- primera desde dentro de la función')
		return 1
	}, 3000)
}

// Llamada a la función sin async await
function orden() {
	console.log(primera01())
}

orden()
