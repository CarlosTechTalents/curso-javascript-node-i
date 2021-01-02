// Variable tipo string
var nombre = 'Carlos'
console.log(nombre)
console.log('Mi nombre es ' + nombre)

// Variable entero
var edad = 52
console.log(' y tengo ' + edad + 'años')

// Variable boolean
var tieneMascota = false
console.log('tiene mascota ' + tieneMascota)
console.log(tieneMascota ? 'Si tiene mascota' : 'No tiene mascota')

// Variable undefined
var mascotaNombre
console.log(mascotaNombre)

// Variable null
tieneMascota = null
console.log(tieneMascota)

// Declaración de variables en una misma línea
var mascotaNombre, mascotaEspecie, mascotaRaza, mascotaEdad, mascotaEstaVacunada

mascotaNombre = 'Kira'
mascotaEspecie = 'Perro'
mascotaRaza = 'Coker'
mascotaEdad = 8
mascotaEstaVacunada = true

// Conversión de variables
console.log(mascotaNombre + ' es un ' + mascotaEspecie + ' ' + mascotaRaza + ' de ' + mascotaEdad + ' años que ' + mascotaEstaVacunada + ' está vacunada')

// Mutación de variables
mascotaEdad = 'Ocho'

console.log(mascotaNombre + ' es un ' + mascotaEspecie + ' ' + mascotaRaza + ' de ' + mascotaEdad + ' años que ' + mascotaEstaVacunada + ' está vacunada')
