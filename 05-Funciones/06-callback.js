// Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta

const operacion = (a, b, funcion) => {
	return funcion(a, b)
}

const suma = (s1, s2) => {
	return s1 + s2
}

const multiplica = (m1, m2) => {
	return m1 * m2
}

// Llamamos a la función operacion() y le pasamamos como parametros dos números y la función suma
// En este caso la función suma no se escribe con paréntesis porque no estamos pidiendo que se ejecute sino que la estamos pasando por parametro
console.log('Suma 2+3')
console.log(operacion(2, 3, suma))

// Llamamos a la función operacion() y le pasamamos como parametros dos números y la función multiplica
console.log('Multiplica 2 * 3')
console.log(operacion(2, 3, multiplica))

// Otro ejemplo de callback donde creo una función que retrasa la ejecución de la función que se le pasa por parámetro el número de segundos que se pasa como segundo parámetro

const retardo = (funcion, tiempo) => {
	console.log('\nEsperando ' + tiempo + ' segundos a la ejecución de:\n' + funcion + '\n')
	setTimeout(funcion, tiempo * 1000)
}

const saludar = () => {
	console.log('Hello World!')
}

const despedir = () => {
	console.log('Hasta luego')
}

retardo(saludar, 2)
retardo(despedir, 4)
