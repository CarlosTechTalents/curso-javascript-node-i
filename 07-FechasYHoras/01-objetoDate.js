// Fechas y horas

// Crear un objeto Date con la fecha y hora actual
var ahora = new Date()

console.log(ahora)

// Funciones de retorno de datos getters
console.log(`Hoy es el día ${ahora.getDate()}, del mes ${ahora.getMonth()}, del año ${ahora.getFullYear()}`)
console.log(`Son las ${ahora.getHours()} horas, ${ahora.getMinutes()} minutos`)

// Funciones de representación
console.log(ahora.toString())
console.log(ahora.toLocaleDateString('es-ES'))
console.log(ahora.toDateString())
console.log(ahora.toTimeString())
console.log(ahora.toLocaleTimeString())

// Timestamp
// Estandar Unix Epoch: milisegundos desde el 01-01-1970 00:00:00
console.log(ahora.getTime())

// Crear un objeto date con una fecha y hora concreta
var fechaDeNacimiento = new Date('1968/05/12')
console.log(fechaDeNacimiento)

var fechaDeNacimientoTZ = new Date('12/05/1968 00:00 GMT+0000')
console.log(fechaDeNacimientoTZ)

var fechaDeAniversario = new Date(1998, 1, 28, 18, 00)
console.log(fechaDeAniversario)

// Calcular diferencia de fechas y horas

console.log(ahora - fechaDeNacimiento)
console.log(ahora.getTime() - fechaDeNacimiento.getTime())

var edad = new Date(ahora.getTime() - fechaDeNacimiento.getTime())
console.log(edad)
console.log(edad.getFullYear() - 1970)

// Formatos sensibles al lenguaje con el método toLocaleDateString()
var fecha = new Date()
var options = { year: 'numeric', month: 'long', day: 'numeric' }
console.log(fecha.toLocaleDateString('es-ES', options))

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
console.log(fecha.toLocaleDateString('es-ES', options))
