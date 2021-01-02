// Objetos literales
// Declaración

var mascota = new Object()

mascota.nombre = 'Kira'
mascota.especie = 'Perro'
mascota.raza = 'Coker'
mascota.sexo = 'F'
mascota.estaVacunada = true
mascota.vacunas = ['Moquillo', 'Hepatitis', 'Parvovirosis', 'Rabia']
mascota.anoDeNacimiento = 2012

console.log(mascota)

// Operaciones

var ahora = new Date()
añoActual = ahora.getFullYear()
console.log('La edad de ' + mascota.nombre + ' es ' + (añoActual - mascota.anoDeNacimiento))

console.log(mascota['sexo'] == 'F' ? 'Femenino' : 'Masculino')

// Cambiar una propiedad de un objeto literal

mascota.raza = 'Collie'
console.log(mascota)

// Añadir una propiedad a un objeto literal

mascota.color = 'Marrón'
console.log(mascota)
