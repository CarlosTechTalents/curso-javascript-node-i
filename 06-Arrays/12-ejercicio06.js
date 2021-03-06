// Según la edad establecer una tabla de vacunaciones
// 'Moquillo' <2 años, 'Hepatitis' < 5 años, 'Parvovirosis' <10, 'Rabia' < 15],

// JSon de vacunas y edades en la que se tienen que poner

const vacunas = [
	{ nombre: 'Moquillo', edad: 2 },
	{ nombre: 'Hepatitis', edad: 5 },
	{ nombre: 'Parvovirosis', edad: 10 },
	{ nombre: 'Rabia', edad: 15 }
]

// JSon de mascotas con las vacunas puestas hasta la fecha
var mascotas = [
	{
		nombre: 'Kira',
		edad: 9,
		vacunasPuestas: ['Hepatitis'],
		vacunasAPoner: []
	},
	{
		nombre: 'Bob',
		edad: 13,
		vacunasPuestas: [],
		vacunasAPoner: []
	},
	{
		nombre: 'Tom',
		edad: 8,
		vacunasPuestas: ['Parvovirosis', 'Moquillo'],
		vacunasAPoner: []
	},
	{
		nombre: 'Einstein',
		edad: 16,
		vacunasPuestas: ['Parvovirosis', 'Moquillo'],
		vacunasAPoner: []
	},
	{
		nombre: 'Laila',
		edad: 3,
		vacunasPuestas: ['Moquillo'],
		vacunasAPoner: []
	}
]

// Saca por pantalla la ficha de la mascota
function fichaMascota(mascota) {
	// Imprime el array de vacunasAPoner, tal cual
	// console.log(`${mascota.nombre} tiene que vacunarse de ${mascota.vacunasAPoner}`)

	// Imprime el array vacunasAPoner con conjunciones
	var listaVacunas = ''

	mascota.vacunasAPoner.map((vacuna, index) => {
		if (index === 0) {
			listaVacunas += vacuna
		} else {
			if (index === mascota.vacunasAPoner.length - 1) {
				listaVacunas += ` y ${vacuna}`
			} else {
				listaVacunas += `, ${vacuna}`
			}
		}
	})

	console.log(`${mascota.nombre} tiene que vacunarse de ${listaVacunas}`)
}

// Recorre el array mascotas y dentro de él recorre el array de vacunas para cada mascota y comprueba de cada vacuna si la mascota está en edad de ponérsela y si ya se le ha puesto, en cuyo caso la añade al campo vacunasAPoner de cada mascota
mascotas.map((mascota, mascotaIndex) => {
	vacunas.map((vacuna) => {
		if (mascota.edad > vacuna.edad && mascota.vacunasPuestas.indexOf(vacuna.nombre) == -1) mascotas[mascotaIndex].vacunasAPoner.push(vacuna.nombre)
	})
})
console.log(mascotas)

// Crea un nuevo array con las mascotas que necesitan vacunarse
var mascotasAVacunar = mascotas.filter((mascota) => mascota.vacunasAPoner.length > 0)

// Recorre el array de mascotas que necesitan vacunarse y llama a la función que saca por pantalla la ficha de cada mascota
console.log(
	'\n*********************************************\n* Listado de animales pendientes de vacunar *\n*********************************************\n'
)
mascotasAVacunar.map((mascotaAVacunar) => {
	fichaMascota(mascotaAVacunar)
})
