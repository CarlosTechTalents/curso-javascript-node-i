// Función setTimeout

const uno = () => {
	setTimeout(() => {
		console.log('Uno desde dentro de la función')
		return 1
	}, 2000)
}

const dos = (valor) => {
	setTimeout(
		(valorTimeout) => {
			console.log('Dos desde dentro de la función')
			console.log(valorTimeout)
			return 2
		},
		3000,
		valor === 1
	)
}

// Con diferencia de timestamps

const valor1 = uno()
const valor2 = dos(valor1)
