const texto = 'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás Del palenque de paja.'

const textoNormalizado = texto
	.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.normalize()

const busqueda = 'murcielago'
const busquedaNormalizada = busqueda
	.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.normalize()

console.log(textoNormalizado.indexOf(busquedaNormalizada))
