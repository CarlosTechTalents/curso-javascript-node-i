// Declaración de variables

var añoActual = 2020

var mascotaNombre, mascotaEspecie, mascotaRaza, mascotaSexo, mascotaAñoDeNacimiento, mascotaEstaVacunada, mascotaEdad

mascotaNombre = 'Kira'
mascotaEspecie = 'Perro'
mascotaRaza = 'Coker'
mascotaSexo = 'F'
mascotaEstaVacunada = false
mascotaAñoDeNacimiento = 2008

mascotaEdad = añoActual - mascotaAñoDeNacimiento

// If

if (mascotaEdad > 10) {
	console.log(mascotaNombre + ' tiene más de 10 años de edad')
}

// Condiciones anidadas

if (mascotaEspecie === 'Perro' && mascotaEdad > 10 && !mascotaEstaVacunada) console.log('Tu perro necesita vacunarse')

// If Else

if (mascotaEstaVacunada) {
	console.log(mascotaNombre + ' está vacunado')
} else {
	console.log(mascotaNombre + ' no está vacunado')
}

// If Else anidados

if (mascotaEdad > 10) {
	if (mascotaEstaVacunada) {
		console.log(mascotaNombre + ' tiene más de 10 años y ya está vacunada.')
	} else {
		console.log(mascotaNombre + ' tiene más de 10 años y no está vacunada.')
	}
} else {
	console.log(mascotaNombre + ' tiene menos de 10 años y no necesita vacunarse.')
}
// if anidados

if (mascotaEdad > 10) {
	// Este código se ejecuta si mascotaEdad es mayor que 10
	if (mascotaAñoDeNacimiento) {
		// Este código se ejecuta si mascotaEdad es mayor que 10 y además está vacunada
	}
} else if (mascotaEstaVacunada) {
	// Este código se ejecuta si mascotaEdad NO es mayor que 10 y además está vacunada
} else {
	// Este código se ejecuta si mascotaEdad NO es mayor que 10 y además NO está vacunada
}

// If Else anidados

if (mascotaEdad < 2) {
	console.log('Tu mascota es un cachorrito')
} else if (mascotaEdad < 5) {
	console.log('Tu mascota es un adolescente')
} else if (mascotaEdad < 10) {
	console.log('Tu mascota es un adulto')
} else {
	console.log('Tu mascota es un senior')
}
