// Desestructuracion Objetos

const getDatosMascotas = () => {
	const mascotas = [
		{
			nombre: 'Kira',
			anoDeNacimiento: 2012,
			datos: {
				especie: 'Perro',
				raza: 'Coker',
				sexo: 'F'
			}
		},
		{
			nombre: 'Bob',
			anoDeNacimiento: 2008,
			datos: {
				especie: 'Perro',
				raza: 'Caniche',
				sexo: 'M'
			}
		},
		{
			nombre: 'Einstein',
			anoDeNacimiento: 2005,
			datos: {
				especie: 'Perro',
				raza: 'Pastor Almán',
				sexo: 'M'
			}
		}
	]
	return mascotas
}

// Como el valor de retorno es un array, tomamos solo un elemento
let {
	datos,
	datos: { raza: race }
} = getDatosMascotas()[0]

console.log(datos)
console.log(race)

// O recorremos el array entero con un bucle for
for (const {
	nombre,
	datos: { raza }
} of getDatosMascotas()) {
	console.log(nombre + ' es un ' + raza)
}
