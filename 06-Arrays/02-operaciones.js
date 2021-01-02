// Arrays operaciones

var nombres = ['Carlos', 'Lola', 'Guillermo', 'Hugo', 'Gonzalo']

console.log(nombres[2])

nombres[1] = 'María Dolores'
console.log(nombres[1])
console.log(nombres.length)

// Operaciones

// push() añade un elemento al final
nombres.push('Valentina')
console.log(nombres)

// unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
nombres.unshift('Hugo')
console.log(nombres)

// pop() elimina el último elemento de un array y lo devuelve
nombres.pop()
console.log(nombres)

// shift() elimina el primer elemento del array y lo retorna.
nombres.shift()
console.log(nombres)

// indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta
var posicion = nombres.indexOf('Guillermo')
console.log(posicion)

// splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

nombres.splice(1, 2)
console.log(nombres)
