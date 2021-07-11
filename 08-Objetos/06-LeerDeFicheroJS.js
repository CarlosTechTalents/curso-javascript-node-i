// https://www.digitalocean.com/community/tutorials/an-introduction-to-json
// https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript

console.log(datosJO)
console.log(datosJO.superheroes)
console.log(datosJO.superheroes[0].nombre)
console.log(datosJO.superheroes.length)
for (var i = 0; i < datosJO.superheroes.length; i++) {
	console.log(datosJO.superheroes[i].nombre + ' tiene ' + datosJO.superheroes[i].superpoderes)
}

console.log('Enemigos: ' + JSON.stringify(datosJO.enemigos))
