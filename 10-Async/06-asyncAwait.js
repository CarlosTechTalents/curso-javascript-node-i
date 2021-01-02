// Javascript asíncrono
function aleatorio() {
	return parseInt(Math.random() * 10)
}

function aleatorioConRetraso() {
	setTimeout(() => {
		return parseInt(Math.random() * 10)
	}, 3000)
}

console.log(aleatorio())
console.log(aleatorioConRetraso())
console.log(aleatorio() + aleatorioConRetraso())

// Promesas y async await

const aleatorioConPromesa = new Promise((response, reject) => {
	setTimeout(() => {
		response(parseInt(Math.random() * 10))
	}, 3000)
})

async function suma() {
	const sumando1 = aleatorio()
	console.log(sumando1)
	const sumando2 = await aleatorioConPromesa
	console.log(sumando2)
	const respuesta = sumando1 + sumando2
	console.log(respuesta)
	return respuesta
}

suma()
