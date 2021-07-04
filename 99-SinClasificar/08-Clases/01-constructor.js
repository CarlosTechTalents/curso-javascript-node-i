/* Aquí declaro la clase */
class Mascota {
	constructor(nombreParam, especieParam, fechaNacimientoParam) {
		this.nombre = nombreParam
		this.especie = especieParam
		this.fechaNacimiento = fechaNacimientoParam
	}
	getEdad() {
		let ahora = new Date()
		let nacimiento = new Date(this.fechaNacimiento)
		return new Date(ahora - nacimiento).getFullYear() - 1970
	}
}

/* Auquí ya estoy fuera de la declaración de la clase */

const mascotaKira = new Mascota('Kira', 'Perro', '2012-09-23')
const mascotaEinstein = new Mascota('Albert', 'Genio', '1919-02-13')

console.log(mascotaKira.nombre)
console.log(mascotaEinstein.especie)
console.log(mascotaEinstein.nombre + ' tiene ' + mascotaEinstein.getEdad() + ' años')
console.log(mascotaKira.nombre + ' tiene ' + mascotaKira.getEdad() + ' años')

let fruta = ['pera', 'manzana']
let frutas = new Array('pera', 'manzana')

console.log(fruta.length)
