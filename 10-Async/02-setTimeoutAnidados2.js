// Función setTimeout anidada
// En este caso los return producen un dato inválido porque se ejecutan después de la llamada a la función y el console.log que llama a la función se ejecuta en el momento de la llamada

const uno = () => {
	setTimeout(() => {
		console.log('Uno desde dentro de la función')
		const valor = 1
		console.log(valor)

		// Llama al segundo setTimeout pasándole la constante valor como parámetro del setTimeout que luego recoge en el argumento valorTimeout
		return setTimeout(
			(valorTimeout) => {
				console.log('Dos desde dentro de la función')
				console.log(++valorTimeout)
				return valorTimeout
			},
			3000,
			valor
		)
	}, 2000)
}

// Con diferencia de timestamps

const resultado = uno()
console.log(resultado)
