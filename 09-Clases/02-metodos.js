// Métodos

class Mascota {
	constructor(nombre, especie, raza, fechaNacimiento, vacunasPuestas) {
		this.nombre = nombre
		this.especie = especie
		this.raza = raza
		this.fechaNacimiento = fechaNacimiento
		this.vacunasPuestas = vacunasPuestas
	}

	getEdad() {
		let ahora = new Date()
		let nacimiento = new Date(this.fechaNacimiento)
		let edad = new Date(ahora - nacimiento)
		return `La edad de ${this.nombre} es ${edad.getFullYear() - 1970} años`
	}

	getVacunas() {
		let historialVacunas = `${this.nombre} ha sido vacunado de: `
		this.vacunasPuestas.forEach((vacuna, index) => {
			historialVacunas += `${vacuna}${index < this.vacunasPuestas.length - 1 ? ', ' : ''}`
		})
		return historialVacunas
	}
}

const mascotaKira = new Mascota('Kira', 'Perro', 'Cocker', '2012-09-23', ['Moquillo', 'Hepatitis'])
const mascotaBob = new Mascota('Bob', 'Perro', 'Collie', '2006-03-19', ['Moquillo', 'Hepatitis', 'Parvovirosis'])
const mascotaTom = new Mascota('Tom', 'Gato', 'Persa', '2009-07-05', ['Hepatitis'])
const mascotaEinstein = new Mascota('Einstein', 'Perro', 'Pastor Alemán', '2004-12-05', ['Parvovirosis', 'Rabia'])
const mascotaLaila = new Mascota('Laila', 'Perro', 'Caniche', '2017-07-05', [])
const mascotaDebie = new Mascota('Debie', 'Gato', 'Siamés', '2015-06-02', [])

console.log(mascotaKira.nombre)
console.log(mascotaBob.fechaNacimiento)

console.log(mascotaKira.getEdad())
console.log(mascotaBob.getEdad())
console.log(mascotaEinstein.getEdad())

console.log(mascotaBob.getVacunas())
console.log(mascotaEinstein.getVacunas())
