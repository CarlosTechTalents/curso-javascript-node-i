let mascota = {
	nombre: 'Kira',
	anoDeNacimiento: 2012,
	datos: {
		especie: 'Perro',
		raza: 'Coker',
		sexo: 'F'
	},
	propietario: {
		nombre: 'Carlos',
		datos: {
			telefono: '630 630 630',
			direccion: {
				ciudad: 'Madrid',
				pais: 'España'
			}
		}
	},
	vacunas: {
		estaVacunada: true,
		vacunasPuestas: [
			{ nombre: 'Moquillo', fecha: '2014-06-18' },
			{ nombre: 'Hepatitis', fecha: '2018-03-21' },
			{ nombre: 'Parvovirosis', fecha: '2017-08-05' },
			{ nombre: 'Rabia', fecha: '2019-08-05' }
		],
		necesitaVacunas: true
	}
}

let {
	datos,
	datos: { raza: race },
	propietario: {
		datos: { telefono }
	},
	vacunas: { vacunasPuestas: vaccine }
} = mascota

console.log(datos)
console.log(race)
console.log(telefono)
vaccine.map((vacuna) => {
	console.log(vacuna.nombre)
})
