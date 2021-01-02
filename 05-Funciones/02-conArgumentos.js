// Función con argumentos

function bienvenidoMultidioma(idioma) {
	switch (idioma) {
		case 'en':
			return 'Welcome'
		case 'fr':
			return 'Bienvenue'
		case 'ge':
			return 'Willkommen'
		case 'it':
			return 'Benvenuto'
		default:
			return 'Bienvenido'
	}
}

// Main

// Llamada a función con argumentos
var mensajeBienvenida
var idioma = 'ge'

mensajeBienvenida = bienvenidoMultidioma(idioma)
console.log(mensajeBienvenida)

console.log(bienvenidoMultidioma('it'))

// Otro ejemplo

function dibujaCuadrado(base, altura, caracter) {
	var base, altura, caracter

	var primeraLinea = ''
	var segundaLinea = ''

	for (var i = 0; i < base; i++) {
		primeraLinea = primeraLinea + caracter
		segundaLinea = segundaLinea + (i === 0 || i === base - 1 ? caracter : ' ')
	}

	console.log(primeraLinea)
	for (var i = 0; i < altura - 2; i++) {
		console.log(segundaLinea)
	}
	console.log(primeraLinea)
}

dibujaCuadrado(8, 10, '*')
dibujaCuadrado(12, 6, '#')
