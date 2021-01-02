// Objetos literales con métodos

var ahora = new Date()
anoActual = ahora.getFullYear()

var mascota = {
	nombre: 'Kira',
	especie: 'Perro',
	raza: 'Coker',
	sexo: 'F',
	estaVacunada: true,
	vacunas: ['Moquillo', 'Hepatitis', 'Parvovirosis', 'Rabia'],
	anoDeNacimiento: 2012,
	calcularEdad: function () {
		this.edad = anoActual - this.anoDeNacimiento
	}
}

mascota.calcularEdad()
console.log(mascota)
