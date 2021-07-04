// Métodos

class MiCLaseArray {
	constructor(nuevoArray) {
		this.matriz = nuevoArray
	}

	getPrimero() {
		return this.matriz[0]
	}

	getUltimo() {
		return this.matriz[this.matriz.length - 1]
	}

	setNuevoElemento(valor) {
		this.matriz.push(valor)
		return this.matriz
	}

	getNuevoObjeto() {
		return new MiCLaseArray(this.matriz)
	}
}

const numeros = new MiCLaseArray([1, 2, 3])
const frutas = new MiCLaseArray(['pera', 'manzana', 'sandía'])

console.log(numeros.matriz)
console.log(frutas.matriz)

const miNuevoArray = new MiCLaseArray(['Carlos', 'Lola'])
console.log(miNuevoArray.matriz)
console.log(miNuevoArray.getPrimero())
console.log(miNuevoArray.getUltimo())
console.log(miNuevoArray.setNuevoElemento('Guillermo'))
console.log(miNuevoArray.getUltimo())
console.log(miNuevoArray.getUltimo().charAt(0))

console.log(new MiCLaseArray(miNuevoArray.setNuevoElemento('Hugo')).getUltimo())

console.log(miNuevoArray.matriz.length)
console.log(miNuevoArray.getNuevoObjeto().getUltimo())
