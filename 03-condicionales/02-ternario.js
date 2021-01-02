// Declaración de variables

var añoActual = 2020

var mascotaNombre, mascotaEspecie, mascotaRaza, mascotaSexo, mascotaAñoDeNacimiento, mascotaEstaVacunada, mascotaEdad

mascotaNombre = 'Kira'
mascotaEspecie = 'Perro'
mascotaRaza = 'Coker'
mascotaSexo = 'F'
mascotaEstaVacunada = false
mascotaAñoDeNacimiento = 2012

mascotaEdad = añoActual - mascotaAñoDeNacimiento

// Ternario

mascotaEdad > 10 ? console.log('Tu mascota ya es un senior') : console.log('Tu mascota todavía no es senior')

// Ternario dentro de If

if (mascotaEstaVacunada) {
	console.log(mascotaNombre + ' está ' + (mascotaSexo == 'M' ? 'vacunado' : 'vacunada'))
} else {
	console.log(mascotaNombre + ' no está ' + (mascotaSexo == 'M' ? 'vacunado' : 'vacunada'))
}
