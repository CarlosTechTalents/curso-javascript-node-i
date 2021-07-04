// Promesas sin argumentos

// Devuelve el número 1 sin retardo
const primera = () => {
	return 1
}

// Devuelve el  número 2 con retardo
const segunda = (param) =>
	new Promise((response) => {
		setTimeout(() => {
			console.log(param + ' desde dentro de la función')
			response(2)
		}, 5000)
	})

/*
const segunda = (param) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(param + 2)
		}, 4000)
	})
}
*/

// Devuelve el número 3 sin retardo
const tercera = () => {
	return 3
}

// Función que se ejecuta al hacer click en el botón del HTML

const btnClick = () => {
	console.log(primera())

	segunda('valor cualquiera')
		.then((res) => {
			console.log(res)
			console.log(tercera())
			return res
		})
		.catch((err) => {
			console.log(err)
		})
}
