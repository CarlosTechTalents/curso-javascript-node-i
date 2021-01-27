//////////////////////////////////////////
//  PROGRAMADO POR: GONZALO DE ANTONIO  //
//////////////////////////////////////////

var juegoCartas = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
var victoria = 0
var fallos = 0
var segundos = 0
var minutos = 0
var nombre = ''
var juegoIniciado = false
var esperar = true
var primeraCarta = null
var segundaCarta = null
var intervaloReloj

function generarCartas() {
	if (!juegoIniciado) {
		for (var i = 0; i < 6; i++) {
			var randomNum = Math.floor(Math.random() * 12)
			var bucle = true
			while (bucle == true) {
				if (juegoCartas[randomNum] == -1) {
					juegoCartas[randomNum] = i
					bucle = false
				} else {
					randomNum = Math.floor(Math.random() * 12)
				}
			}
		}
		for (var i = 0; i < 6; i++) {
			var randomNum = Math.floor(Math.random() * 12)
			var bucle = true
			while (bucle == true) {
				if (juegoCartas[randomNum] == -1) {
					juegoCartas[randomNum] = i
					bucle = false
				} else {
					randomNum = Math.floor(Math.random() * 12)
				}
			}
		}
		for (var i = 0; i < 12; i++) {
			console.log(juegoCartas[i])
		}
		juegoIniciado = true
		intervaloReloj = setInterval(reloj, 1000)
		document.querySelector('#textoFallos').textContent = 'FALLOS: 0'
		segundos = 0
		minutos = 0
		fallos = 0
		document.getElementById('wingif').style.display = 'none'
		nombre = prompt('Introduce tu nombre:')
	}
}

function restart() {
	for (var i = 0; i < 12; i++) {
		document.getElementById(i).src = './imgs/traseroCarta.png'
		document.getElementById('wingif').style.display = 'none'
		juegoIniciado = false
		juegoCartas[i] = -1
	}
	document.querySelector('#textoFallos').textContent = 'FALLOS: 0'
	victoria = 0
	fallos = 0
	clearInterval(intervaloReloj)
}

function girarCarta(idElemento) {
	if (juegoIniciado && esperar && document.getElementById(idElemento).src.indexOf('traseroCarta.png') != -1) {
		if (primeraCarta == null) {
			document.getElementById(idElemento).src = './imgs/' + juegoCartas[idElemento] + '.png'
			primeraCarta = idElemento
			console.log(primeraCarta + juegoCartas[primeraCarta])
		} else {
			document.getElementById(idElemento).src = './imgs/' + juegoCartas[idElemento] + '.png'
			segundaCarta = idElemento
			console.log(segundaCarta + juegoCartas[segundaCarta])
			esperar = false
			setTimeout(function comprobarGanador() {
				if (juegoCartas[primeraCarta] == juegoCartas[segundaCarta]) {
					victoria++
				} else {
					document.getElementById(primeraCarta).src = './imgs/traseroCarta.png'
					document.getElementById(segundaCarta).src = './imgs/traseroCarta.png'
					fallos++
					document.querySelector('#textoFallos').textContent = 'FALLOS: ' + fallos
				}
				esperar = true
				primeraCarta = null
				segundaCarta = null
				if (victoria == 6) {
					victoria = 0
					alert('¡ENHORABUENA!\nHas ganado')
					clearInterval(intervaloReloj)
					document.getElementById('wingif').style.display = 'block'
					var node = document.createElement('li')
					node.appendChild(document.createTextNode(nombre + ' - Fallos: ' + fallos + ' Tiempo: ' + minutos + ' minutos y ' + segundos + ' segundos'))
					document.querySelector('ol').appendChild(node)
					segundos = 0
					minutos = 0
					fallos = 0
				}
			}, 1000)
		}
	}
}

function reloj() {
	segundos++
	if (segundos >= 60) {
		segundos = 0
		minutos += 1
	}
	if (segundos < 10) {
		if (minutos < 10) {
			document.querySelector('#reloj').textContent = '0' + minutos + ':0' + segundos
		} else {
			document.querySelector('#reloj').textContent = minutos + ':0' + segundos
		}
	} else {
		if (minutos < 10) {
			document.querySelector('#reloj').textContent = '0' + minutos + ':' + segundos
		} else {
			document.querySelector('#reloj').textContent = minutos + ':' + segundos
		}
	}
}
