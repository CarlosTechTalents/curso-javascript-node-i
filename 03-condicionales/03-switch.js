// Declaración de variables

var mes = 'Diciembre'

// Sentencia switch

switch (mes) {
	case ('Enero', 'Febrero', 'Marzo'):
		console.log('1º Trimestre')
		break
	case ('Abril', 'Mayo', 'Junio'):
		console.log('2º Trimestre')
		break
	case ('Julio', 'Agosto', 'Septiembre'):
		console.log('3º Trimestre')
		break
	case ('Octubre', 'Noviembre', 'Diciembre'):
		console.log('4º Trimestre')
		break
	default:
		console.log('Error: Mes no encontrado')
}
