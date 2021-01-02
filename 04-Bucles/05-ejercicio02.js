//////////////////
// Ejercicio 02 //
//////////////////

/* Ejercicio de sentencias */

/*
 * Tienes dos alumnos, Pablo y Maria.
 * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 19, 16.
 * María tiene las siguientes notas en el curso de mismo curso: 12, 18, 10.
 *
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
 * superior, e indicar si el alumno esta aprobado, para ello su promedio
 * debe ser superior a 13.
 */

var promedioPablo = (14 + 19 + 16) / 3
var promedioMaria = (12 + 16 + 10) / 3

//Promedio superior
if (promedioPablo > promedioMaria) {
	console.log('Pablo tiene el promedio superior.')
} else if (promedioMaria > promedioPablo) {
	console.log('María tiene el promedio superior.')
} else {
	console.log('Pablo y María tienen promedios iguales.')
}

//mostrar si estan aprobados
for (var i = 1; i <= 2; i++) {
	if (i === 1) {
		console.log('Promedio de pablo:' + promedioPablo)
		if (promedioPablo > 13) {
			console.log('Pablo esta aprobado.')
		} else {
			console.log('Pablo esta desaprobado.')
		}
	} else {
		console.log('Promedio de María:' + promedioMaria)
		if (promedioMaria > 13) {
			console.log('María esta aprobada.')
		} else {
			console.log('Maria esta desaprobada.')
		}
	}
}
