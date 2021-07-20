// Defino el canvas
const canvas1 = document.querySelector('canvas')
canvas1.width = window.innerWidth
canvas1.height = window.innerHeight
const c = canvas1.getContext('2d')

// Defino los elementos a dibujar en mi canvas
const numeroCirculos = 1000
const numeroContagiosIniciales = 1
const distanciaDeContagio = 5
const arrayDeCirculos = []

const arrayDeColores = ['coral', 'olive', 'teal']

// Variables para controlar la animación
var parado = true
var animationId

// Creo un retardo que se produzca en caso de hacer resize en el tamaño de mi ventana
const retardo = (func) => {
	let temporizador
	return (event) => {
		if (temporizador) {
			clearTimeout(temporizador)
		}
		temporizador = setTimeout(func, 100, event)
	}
}

// Creo una función que se ejecute en caso de cambiar el tamaño de la ventana y se la mando el retardo
window.addEventListener(
	'resize',
	retardo(() => {
		canvas1.width = window.innerWidth
		canvas1.height = window.innerHeight

		inicio()
	})
)

// Inicializo los elementos que dibujaré en el canvas mediante un array de objetos de una clase que defino
const inicio = () => {
	arrayDeCirculos.length = 0
	for (let i = 0; i < numeroCirculos; i++) {
		const radio = Math.random() * 18 + 2
		const x = Math.random() * (innerWidth - radio * 2) + radio
		const y = Math.random() * (innerHeight - radio * 2) + radio
		const dx = (Math.random() - 0.5) * 2
		const dy = (Math.random() - 0.5) * 2
		// Genero aleatoriamente tantos colores como hay en el array de colores excepto del primer color que asigno directamente al número de contagiados iniciales
		const color =
			i < numeroCirculos - numeroContagiosIniciales ? arrayDeColores[1 + Math.floor(Math.random() * (arrayDeColores.length - 1))] : arrayDeColores[0]

		// Con las variables de cada círculo se crea una nueva instancia del objeto círculo y se guarda en un array
		arrayDeCirculos.push(new Circulo(x, y, dx, dy, radio, color))
	}
}

// La clase Circulo define los objetos que dibujaremos en el canvas
class Circulo {
	constructor(x, y, dx, dy, radio, color) {
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.radio = radio
		this.color = color
	}

	// El método 'dibuja' es un método interno que dibuja un objeto de la clase Circulo
	dibuja() {
		c.beginPath()
		c.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false)
		c.strokeStyle = 'black'
		c.stroke()
		c.fillStyle = this.color
		c.fill()
	}

	// El método 'actualiza' es un método que actualiza la posición de un objeto de la clase Circulo y después llama al método 'dibuja'
	actualiza() {
		if (this.x + this.radio > innerWidth || this.x - this.radio < 0) this.dx = -this.dx
		if (this.y + this.radio > innerHeight || this.y - this.radio < 0) this.dy = -this.dy

		this.x += this.dx
		this.y += this.dy

		this.dibuja()
	}
}

// La función animación se llama a si misma mediante el método requestAnimationFrame y actualiza los posición y dibuja todos los objetos del arrayDeCirculos
const animacion = () => {
	animationId = requestAnimationFrame(animacion)
	parado = false

	c.clearRect(0, 0, innerWidth, innerHeight)

	// Aquí se establece el algoritmo que queremos usar para actualizar los contagios
	for (let i = 0; i < arrayDeCirculos.length; i++) {
		for (let j = 0; j < arrayDeCirculos.length; j++) {
			if (distancia(arrayDeCirculos[i].x, arrayDeCirculos[i].y, arrayDeCirculos[j].x, arrayDeCirculos[j].y) <= distanciaDeContagio)
				arrayDeCirculos[i].color = arrayDeCirculos[j].color
		}
	}

	// Actualiza y dibuja todos los círculos
	for (let i = 0; i < arrayDeCirculos.length; i++) {
		arrayDeCirculos[i].actualiza()
	}

	// Cuenta y muestra el número de círculos círculos de cada color y el círculo en la capa máxima y mínima
	for (let i = 0; i < arrayDeColores.length; i++) {
		let max = 0
		let min = numeroCirculos
		for (j = 0; j < numeroCirculos; j++) {
			if (arrayDeCirculos[j].color === arrayDeColores[i]) {
				if (j > max) max = j
				if (j < min) min = j
			}
		}

		const count = arrayDeCirculos.filter((item) => item.color === arrayDeColores[i]).length
		c.font = '22px Helvetica Bold'
		c.fillStyle = arrayDeColores[i]
		c.fillText(count, 20, 50 + 25 * i)
		c.fillText(min, 120, 50 + 25 * i)
		c.fillText(max, 220, 50 + 25 * i)

		// Dibuja un cuadrado en el centro del círculo de la capa más alta de cada color
		c.strokeStyle = 'red'
		c.strokeRect(arrayDeCirculos[max].x - 4, arrayDeCirculos[max].y - 4, 8, 8)
	}
}

const distancia = (x1, y1, x2, y2) => {
	return Math.floor(Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)))
}

// Esta función para la animación
function paraAnimacion() {
	if (animationId) cancelAnimationFrame(animationId)
	parado = true
}

// En caso de hacer click en el canvas ejecutamos un callback si la animación esta parada llamamos a la función animación() y si no está parada llamamos a pararanimacion()
canvas1.addEventListener(
	'click',
	() => {
		parado == true ? animacion() : paraAnimacion()
	},
	false
)

// Llamada a las funciones inicio() y animacion() por primera vez para que se realice la configuración inicial y empiece la animación
inicio()
animacion()
