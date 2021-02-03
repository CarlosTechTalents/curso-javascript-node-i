// Objeto json

const mascotas = [
	{
		nombre: 'Kira',
		edad: 9
	},
	{
		nombre: 'Bob',
		edad: 13
	},
	{
		nombre: 'Tom',
		edad: 8
	},
	{
		nombre: 'Einstein',
		edad: 14
	},
	{
		nombre: 'Laila',
		edad: 3
	}
]

// Convertir un JSON a string
var mascotasString = JSON.stringify(mascotas)
console.log(mascotasString)

// Convertir un string a JSON
var mascotasJSON = JSON.parse(mascotasString)
console.log(mascotasJSON)

// Filtrar un JSON
const menoresDe10 = mascotas.filter((mascota) => mascota.edad < 10)
console.log('Menores de 10')
console.log(menoresDe10)
