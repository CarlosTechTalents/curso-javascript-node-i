/* Hacer una función que tome como parametros de entra la base, altura y caracter de un rectángulo y lo dibuje */

function rectangulo(base, altura, caracter) {
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

// rectangulo(10, 5, '$')
// rectangulo(20, 8, '@')

for (var i = 3; i < 10; i++) {
	rectangulo(i, i / 2, '&')
	console.log('')
}

/*
********
*      *
*      *
*      *
*      *
*      *
*      *
*      *
*      *
********
############
#          #
#          #
#          #
#          #
############
*/
