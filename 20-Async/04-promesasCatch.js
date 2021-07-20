// Promesas con reject

// Devuelve un reject si el número aleatorio es menor que 5
const promesa = new Promise((response, reject) => {
	let numero = parseInt(Math.random() * 10)
	if (numero < 5) response(`El numero ${numero} es menor que 5`)
	reject(`El numero ${numero} no es menor que 5`)
})

promesa
	.then((res) => {
		console.log('Correcto: ' + res)
	})
	.catch((err) => {
		console.log('Error: ' + err)
	})
