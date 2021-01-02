// Método map para recorrer un array

const añosDeNacimientoHijos = [2010, 2014, 2018]

var edades
edades = añosDeNacimientoHijos.map((año) => {
	return 2020 - año
})
console.log(edades)

// Arrow Function con índice

edades = añosDeNacimientoHijos.map((año, index) => {
	return `La edad del hijo ${index + 1} es ${2020 - año}, `
})

console.log(edades)

// Arrow Function de una línea

edades = añosDeNacimientoHijos.map((año, index) => `La edad del hijo ${index + 1} es ${2020 - año}, `)

console.log(edades)
