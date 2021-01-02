// getter y setter

const datos = {
	get ciudad() {
		return this._ciudad
	},
	set ciudad(valor) {
		this._ciudad = 'Tu ciudad es : ' + valor
	}
}

datos.ciudad = 'Madrid'
console.log(datos.ciudad)
console.log(datos)

// Cambiar el formato de una fecha día-mes-año a año, mes, día
const mascota = {
	get fechaNacimiento() {
		return this._fechaNacimiento
	},

	set fechaNacimiento(valor) {
		let separador = ''
		if (valor.indexOf('/') > 0) separador = '/'
		if (valor.indexOf('-') > 0) separador = '-'
		if (valor.indexOf('.') > 0) separador = '.'

		// Año es una valor mayor de 1900
		// Mes es un valor entre 0 y 11
		// Día es un valor entre 1 y 31

		let dia = valor.substring(0, valor.indexOf(separador))
		let mesAno = valor.substring(valor.indexOf(separador) + 1)
		let mes = mesAno.substring(0, mesAno.indexOf(separador)) - 1
		let ano = mesAno.substring(mesAno.indexOf(separador) + 1)

		this._fechaNacimiento = new Date(Date.UTC(ano, mes, dia, 0, 0, 0))
	}
}

mascota.fechaNacimiento = '21/12/2013'
console.log(mascota.fechaNacimiento)

mascota.fechaNacimiento = '2.1.2013'
console.log(mascota.fechaNacimiento)

mascota.fechaNacimiento = '02-01-2013'
console.log(mascota.fechaNacimiento)

mascota.fechaNacimiento = '21/12/2013'
console.log(mascota.fechaNacimiento)
