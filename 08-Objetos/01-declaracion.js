let mascota1 = {
	nombre: 'Kira',
	especie: 'Perro',
	raza: 'Coker',
	sexo: 'F',
	estaVacunada: true,
	vacunas: ['Moquillo', 'Hepatitis', 'Parvovirosis', 'Rabia'],
	anoDeNacimiento: 2012
}

let mascota2 = {
	nombre: 'Bob',
	especie: 'Perro',
	raza: 'Pastor Alemán',
	sexo: 'M',
	estaVacunada: true,
	vacunas: ['Moquillo'],
	anoDeNacimiento: 2008
}

let getFichaMascota = (mascota) => {
	return {
		edad: `${2020 - mascota.anoDeNacimiento}`,
		color: 'Marrón'
	}
}

let persona = {
	nombre: 'Carlos',
	ciudad: 'Madrid'
}
