// Método map para recorrer un array

const añosDeNacimientoHijos = [2010, 2014, 2018]

var edades = añosDeNacimientoHijos.map(function (año) {
	return 2020 - año
})

console.log(edades)
