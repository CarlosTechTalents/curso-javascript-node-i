// Objetos literales

var mascota = {
	nombre: 'Kira',
	especie: 'Perro',
	raza: 'Coker',
	sexo: 'F',
	estaVacunada: true,
	vacunas: ['Moquillo', 'Hepatitis', 'Parvovirosis', 'Rabia'],
	anoDeNacimiento: 2012
}

console.log(mascota)

var ahora = new Date()
anoActual = ahora.getFullYear()
console.log('La edad de ' + mascota.nombre + ' es ' + (anoActual - mascota.anoDeNacimiento))

console.log(mascota['sexo'] == 'F' ? 'Femenino' : 'Masculino')

// Cambiar una propiedad de un objeto literal

mascota.raza = 'Collie'
console.log(mascota)

// Añadir una propiedad a un objeto literal

mascota.color = 'Marrón'
console.log(mascota)

console.log(mascota.vacunas)
console.log(mascota.vacunas[1])
