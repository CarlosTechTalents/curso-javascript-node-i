// Filter recorre el array entero devolviendo un nuevo array de los elementos que cumplen una condición

const nombres = ['Kira', 'Toby', 'Einstein', 'Rocko']

const misMascotas = nombres.filter((item) => item !== 'Rocko')

console.log(misMascotas)

// Otro ejemplo

const mascotas = [
	{
		nombre: 'Kira',
		especie: 'perro',
		vacunas: 'parvovirus, moquillo, adenovirus o hepatitis'
	},
	{
		nombre: 'Bob',
		especie: 'perro',
		cuidador: 'Juan',
		vacunas: ''
	},
	{
		nombre: 'Tom',
		especie: 'perro',
		vacunas: 'rabia, moquillo, parvovirus'
	},
	{
		nombre: 'Einstein',
		especie: 'Loro',
		vacunas: 'Salmonelosis',
		cuidador: 'juan'
	},
	{
		nombre: 'Laila',
		especie: 'gato',
		cuidador: 'Andrés',
		vacunas: 'Parvovirus'
	}
]

// Filtro donde el atributo especie es igual a perro.
const perros = mascotas.filter((mascota) => mascota.especie == 'perro')

console.log('\n\nPerros:')
console.log(perros)

// Filtro donde vacuna contiene un término de busqueda.
const mascotasVacunadasDe = (vacuna) => mascotas.filter((mascota) => mascota.vacunas.toLowerCase().indexOf(vacuna.toLowerCase()) > -1)

// La línea de código anterior equivale al código siguiente:
/*
const mascotasVacunadasDe = (vacuna) => {
	return mascotas.filter((mascota) => mascota.vacunas.toLowerCase().indexOf(vacuna) > -1)
}
*/

const vacunaFiltro = 'parvovirus'
console.log('\n\nVacunados de ' + vacunaFiltro + ': ')
console.log(mascotasVacunadasDe(vacunaFiltro))

// En cualquier caso, la mascota siempre tiene que tener un campo vacunas. Si no es así, primero deberemos hacer un array con las mascotas que tienen dicho campo.
// Por ejemplo, si queremos filtrar las mascotas con cuidador Juan, primero seleccionamos las mascotas que tienen cuidador y luego de esas las que su cuidador contiene Juan

const mascotasConCuidador = mascotas.filter((mascota) => typeof mascota.cuidador !== 'undefined')
const mascotasCuidasPor = (cuidador) => mascotasConCuidador.filter((mascota) => mascota.cuidador.toLowerCase().indexOf(cuidador.toLowerCase()) > -1)

const cuidador = 'Juan'
console.log('\n\nMascotas cuidadas por: ' + cuidador + ': ')
console.log(mascotasCuidasPor(cuidador))
