// Valores interpretados true y false

var mascotaEdad // false
console.log(mascotaEdad)
if (mascotaEdad) {
	console.log('mascotaEdad es true')
} else {
	console.log('mascotaEdad es false')
}

mascotaEdad = 10 // true
console.log(mascotaEdad)
if (mascotaEdad) {
	console.log('mascotaEdad es true')
} else {
	console.log('mascotaEdad es false')
}

mascotaEdad = 0 //false
console.log(mascotaEdad)
if (mascotaEdad) {
	console.log('mascotaEdad es true')
} else {
	console.log('mascotaEdad es false')
}

mascotaEdad = '' //false
console.log(mascotaEdad)
if (mascotaEdad) {
	console.log('mascotaEdad es true')
} else {
	console.log('mascotaEdad es false')
}

// Operadores de igualdad
// ==
mascotaEdad = 10
console.log(mascotaEdad)
console.log(typeof mascotaEdad)
if (mascotaEdad == '10') {
	console.log('mascotaEdad es true con coersión')
} else {
	console.log('mascotaEdad es false con coersión')
}

// ===
mascotaEdad = 10
console.log(mascotaEdad)
console.log(typeof mascotaEdad)
if (mascotaEdad === '10') {
	console.log('mascotaEdad es estrictamente igual true')
} else {
	console.log('mascotaEdad es estrictamente igual false')
}
