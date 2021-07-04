// Función setTimeout

console.log('Inicio')
setTimeout(() => {
	console.log('Después de pausa')
}, 3000)

// Con diferencia de timestamps

const ahora = new Date()
console.log('Antes de la pausa: ' + ahora.getTime())
setTimeout(() => {
	const despues = new Date()
	console.log('Después de pausa: ' + despues.getTime())
	console.log('Diferencia antes-durante: ' + (durante.getTime() - ahora.getTime()))
	console.log('Diferencia antes-después: ' + (despues.getTime() - ahora.getTime()))
}, 3000)

const durante = new Date()
console.log('Durante la pausa: ' + durante.getTime())
