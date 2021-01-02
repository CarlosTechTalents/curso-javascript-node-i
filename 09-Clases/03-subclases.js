// Subclases

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
		return edad.getFullYear() - 1970
	}

	getVacunas() {
		let historialVacunas = `${this.nombre} ha sido vacunado de: `
		this.vacunasPuestas.forEach((vacuna, index) => {
			historialVacunas += `${vacuna}${index < this.vacunasPuestas.length - 1 ? ', ' : ''}`
		})
		return historialVacunas
	}
}

// La clse Perro hereda de la clase Mascota, además tiene sus propios elementos: propiedades y métodos
class Perro extends Mascota {
	constructor(nombre, especie, raza, fechaNacimiento, vacunasPuestas, tieneChip, numeroChip) {
		super(nombre, especie, raza, fechaNacimiento, vacunasPuestas)
		this.tieneChip = tieneChip
		this.numeroChip = numeroChip
	}
	getEdad() {
		var etapaPerro
		if (super.getEdad() < 3) {
			etapaPerro = 'cachorro'
		} else if (super.getEdad() < 8) {
			etapaPerro = 'adolescente'
		} else if (super.getEdad() < 15) {
			etapaPerro = 'adulto'
		} else {
			etapaPerro = 'senior'
		}
		return `${super.getEdad()} años perrunos. Tu perro es un ${etapaPerro}.`
	}
	getVacunas() {
		let historialVacunas = `Tu perro ${this.nombre} ha sido vacunado de: `
		this.vacunasPuestas.forEach((vacuna, index) => {
			historialVacunas += `${vacuna}${index < this.vacunasPuestas.length - 1 ? ', ' : ''}`
		})
		return historialVacunas
	}
}

const mascotaKira = new Perro('Kira', 'Perro', 'Cocker', '2012-09-23', ['Moquillo', 'Hepatitis'], true, 123456789)
const mascotaBob = new Perro('Bob', 'Perro', 'Collie', '2006-03-19', ['Moquillo', 'Hepatitis', 'Parvovirosis'], false, '')
const mascotaTom = new Mascota('Tom', 'Gato', 'Persa', '2009-07-05', ['Hepatitis'])
const mascotaEinstein = new Perro('Einstein', 'Perro', 'Pastor Alemán', '2004-12-05', ['Parvovirosis', 'Rabia'], true, 987654321)
const mascotaLaila = new Perro('Laila', 'Perro', 'Caniche', '2017-07-05', [], false, '')
const mascotaDebie = new Mascota('Debie', 'Gato', 'Siamés', '2015-06-02', [])

console.log(mascotaKira.nombre)
console.log(mascotaBob.fechaNacimiento)

console.log(`La edad de ${mascotaKira.nombre} es ${mascotaKira.getEdad()}`)
console.log(`La edad de ${mascotaTom.nombre} es ${mascotaTom.getEdad()}`)
console.log(mascotaBob.getEdad())
console.log(mascotaEinstein.getEdad())
