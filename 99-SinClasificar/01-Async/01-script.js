// Presentación de la problemática de la programación asíncrona

const uno = () => {
	setTimeout(() => {
		console.log('Uno')
		return 1
	}, 4000)
}

// La función dos() presentará por concola un true si recibe como parámetro un valor 1, pero no puede recibirlo de la función uno() porque las dos funciones se lanzan al mismo tiempo.
const dos = (valor) => {
	setTimeout(
		(valorTimeout) => {
			console.log('Dos')
			console.log(valorTimeout)
			return 2
		},
		3000,
		valor === 1 // Este es el parámetro que se pasa a la función setTimeout
	)
}

const btnClick = () => {
	const valor1 = uno()
	const valor2 = dos(valor1)
}
