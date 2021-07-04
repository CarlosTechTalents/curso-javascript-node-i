// Función setTimeout anidada
// En este caso la promesa se crea al cargar la página y se consume cuando hago click en el botón

const uno = new Promise((response) => {
	setTimeout(() => {
		console.log('Creo la parte Uno de la promesa')
		const valor = 1
		console.log(valor)

		// Llama al segundo setTimeout pasándole la constante valor como parámetro del setTimeout que luego recoge en el argumento valorTimeout
		return setTimeout(
			(valorTimeout) => {
				console.log('Creo la parte Dos de la promesa')
				console.log(valorTimeout)
				response(2)
			},
			3000,
			valor === 1 // Como parametro del setTimeout paso la comparación de valor con 1
		)
	}, 2000)
})

const btnClick = () => {
	console.log('Acabo de llamar a la promesa uno')
	uno
		.then((valor1) => {
			console.log('Acabo de consumir la promesa uno con éxito')
			console.log(valor1)
		})
		.catch((err) => {
			console.log(err)
		})
}
