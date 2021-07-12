// Variables de la nave
var naveX = Math.floor(Math.random() * 500)
var naveY = 0
var incrementoNave = Math.floor(Math.random() * 10) + 1

// Variables de la bomba
var bombaX = 0
var bombaY = 40
var incrementoBomba = 10
var disparoBomba = false

// Variables del la explosión
var contadorExplosion = 0

// Variables del tanque
var tanqueX = Math.floor(Math.random() * 500)
var tanqueY = 310
var incrementoTanque = Math.floor(Math.random() * 3) + 1
var tanqueDestruido = false

// Variables de la puntuación
var puntos = 0
var puntosWin = 20
var youWin = false
var tiempoDeJuego = 20000

// Variables de las imagenes
var fondo, nave, bomba, explosion, tanque, gameOver, ganador

// Cargo las imagenes
function preload() {
	fondo = loadImage('hong-kong.jpg')
	ganador = loadImage('youWin.jpg')
	gameOver = loadImage('game-over.jpg')
	nave = loadImage('ufo.webp')
	bomba = loadImage('bomba.png')
	explosion = loadImage('explosion.png')
	tanque = loadImage('tanque.png')
}

// Creo el canvas
function setup() {
	createCanvas(600, 400)
}

function draw() {
	if (tiempoDeJuego > 0) {
		if (puntos < puntosWin) tiempoDeJuego -= 1

		// Dibujo el fondo
		background(fondo)

		// Dibujo los puntos
		fill('green')
		textSize(16)
		text('Puntos: ' + puntos, 10, 20)
		text('Points to Win: ' + (puntosWin - puntos), 220, 20)
		text('Tiempo: ' + tiempoDeJuego, 480, 20)

		// Dibujo la nave e incremento su posición X
		image(nave, naveX, naveY, 80, 80)
		naveX = naveX + incrementoNave

		// Si la nave toca algún extremo cambión el sentido y el valor del incremento de X
		if (naveX > 520) incrementoNave = -Math.floor(Math.random() * 10) - 1
		if (naveX < 0) incrementoNave = Math.floor(Math.random() * 10) + 1

		// Dibujo el tanque e incremento su posición X
		image(tanque, tanqueX, tanqueY, 140, 100)
		if (!tanqueDestruido) tanqueX = tanqueX + incrementoTanque

		// Si el tanque toca algún extremo cambión el sentido y el valor del incremento de X
		if (tanqueX > 500) incrementoTanque = -Math.floor(Math.random() * 3) - 1
		if (tanqueX < -40) incrementoTanque = Math.floor(Math.random() * 3) + 1

		// Compruebo si se ha disparado la bomba
		if (disparoBomba) {
			// Si se ha disparado la bomba compruebo a que altura está
			// En el primer tramos de la bomba, dibujo la bomba cayendo
			if (bombaY < 360) image(bomba, bombaX, bombaY, 40, 40)

			// Cuando la bomba llega al suelo inicio la explosión y compruebo si ha alcanzado el objetivo, el tanque
			if (bombaY > 360 && bombaY <= 360 + incrementoBomba) {
				contadorExplosion = 0

				// Si al llegar al suelo la bomba está cerca del tanque, sumo un punto y cambio la variabble para que el tanque se pare mientras dura la explosión
				if (Math.abs(bombaX - tanqueX - 65) < 40) {
					puntos += 1
					if (incrementoBomba > 2) incrementoBomba -= 1
					tanqueDestruido = true
				}
			}

			// Dibujo la explosión moviendo y haciendo más grande la imagen de la explosión
			if (bombaY > 360) {
				contadorExplosion += 1
				image(explosion, bombaX - contadorExplosion, 400 - 2.5 * contadorExplosion, 3 * contadorExplosion, 3 * contadorExplosion)
			}

			// Cuando finaliza la explosión cambio las variables para que el tanque se siga moviendo y se pueda lanzar otra bomba. Si ha llegado a los puntos para ganar alarga la explosión.
			if ((contadorExplosion > 100 && puntos < puntosWin) || (contadorExplosion > 1000 && puntos >= puntosWin)) {
				tanqueDestruido = false
				disparoBomba = false
				contadorExplosion = 0
				if (puntos == puntosWin) {
					youWin = true
					tiempoDeJuego = 0
				}
			}

			// Incremento el contador de la bomba todavía dentro del if de la bomba cayendo
			bombaY = bombaY + incrementoBomba
		}
	} else {
		if (youWin) {
			background(ganador)
		} else {
			background(gameOver)
		}
	}
}

// Detecto si pulso una tecla, hago click con el ratón o toco la pantalla touch de la tablet o móvil para lanzar una bomba si no hay ninguna bomba cayendo
function keyPressed() {
	if (!disparoBomba) {
		bombaX = naveX
		bombaY = 30
		disparoBomba = true
	}
}
function mouseClicked() {
	if (!disparoBomba) {
		bombaX = naveX
		bombaY = 30
		disparoBomba = true
	}
}
function touchStarted() {
	if (!disparoBomba) {
		bombaX = naveX
		bombaY = 30
		disparoBomba = true
	}
}
