// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Declaración
var mascotaNombre, mascotaEspecie, mascotaRaza, mascotaEdad, mascotaEstaVacunada

mascotaNombre = 'Kira'
mascotaEspecie = 'Perro'
mascotaRaza = 'Coker'
mascotaEdad = 8
mascotaEstaVacunada = true

console.log(mascotaNombre + ' es un ' + mascotaEspecie + ' ' + mascotaRaza + ' de ' + mascotaEdad + ' años que ' + mascotaEstaVacunada + ' está vacunada')

// Operadores matemáticos
var añoActual = 2021
var mascotaAñoDeNacimiento = 2008

mascotaEdad = añoActual - mascotaAñoDeNacimiento

console.log('La edad de ' + mascotaNombre + ' es ' + mascotaEdad)

// Agrupación y prioridad de ejecución de operaciones con paréntesis
console.log(añoActual - mascotaAñoDeNacimiento)
console.log('La edad de ' + mascotaNombre + ' es ' + añoActual - mascotaAñoDeNacimiento)
console.log('La edad de ' + mascotaNombre + ' es ' + (añoActual - mascotaAñoDeNacimiento))

// Operadores lógicos
var mascotaEsViejo

mascotaEsViejo = mascotaEdad > 10
console.log(mascotaNombre + ' es viejo: ' + mascotaEsViejo)

const perroViejo = 10
const gatoViejo = 15

mascotaEsViejo = (mascotaEspecie == 'Perro' && mascotaEdad > perroViejo) || (mascotaEspecie == 'Gato' && mascotaEdad > gatoViejo)
console.log(mascotaNombre + ' es de especie ' + mascotaEspecie + ' es viejo: ' + mascotaEsViejo)

// Asignación múltiple

mascotaEsViejo = mascotaEspecie = 'Gato'
console.log(mascotaEsViejo)
console.log(mascotaEspecie)

// Operador typeof
console.log('mascotaEspecie es de tipo: ' + typeof mascotaEspecie)
console.log('mascotaEdad es de tipo: ' + typeof mascotaEdad)
console.log('mascotaEstaVacunada es de tipo: ' + typeof mascotaEstaVacunada)

// Operador incremento y decremento
mascotaEdad++
console.log('Felicidades ' + mascotaNombre + ', hoy es tu cumpleaños y ahora tienes ' + mascotaEdad + ' años')

console.log(++mascotaEdad)
console.log(mascotaEdad)

console.log(mascotaEdad++)
console.log(mascotaEdad)

// Operadores de asignación
var a = 1
var b = 2
b = b + a
console.log(b)
b += a
console.log(b)
console.log('El resto de 10 entre 3 es: ' + (10 % 3))
