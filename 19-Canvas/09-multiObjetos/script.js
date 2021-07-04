// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

// Defino el canvas
const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

// Defino los elementos a dibujar en mi canvas
const numeroCirculos = 800
const maxRadius = 40
const arrayDeCirculos = []

const arrayDeColores = ['olive', 'indianred', 'purple', 'coral', 'teal']

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
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		inicio()
	})
)

// Inicializo los elementos que dibujaré en el canvas mediante un array de objetos de una clase que defino
const inicio = () => {
	arrayDeCirculos.length = 0
	for (let i = 0; i < numeroCirculos; i++) {
		const radio = Math.random() * 20 + 1
		const x = Math.random() * (innerWidth - radio * 2) + radio
		const y = Math.random() * (innerHeight - radio * 2) + radio
		const dx = (Math.random() - 0.5) * 2
		const dy = (Math.random() - 0.5) * 2

		arrayDeCirculos.push(new Circulo(x, y, dx, dy, radio))
	}
}

// La clase Circulo define los objetos que dibujaremos en el canvas
class Circulo {
	constructor(x, y, dx, dy, radio) {
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.radio = radio
		this.color = arrayDeColores[Math.floor(Math.random() * arrayDeColores.length)]
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
		if (this.x + this.radio > innerWidth || this.x - this.radio < 0) {
			this.dx = -this.dx
		}

		if (this.y + this.radio > innerHeight || this.y - this.radio < 0) {
			this.dy = -this.dy
		}

		this.x += this.dx
		this.y += this.dy

		this.dibuja()
	}
}

// La función animación se llama a si misma mediante el método requestAnimationFrame y actualiza los posición y dibuja todos los objetos del arrayDeCirculos
const animacion = () => {
	requestAnimationFrame(animacion)
	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < arrayDeCirculos.length; i++) {
		arrayDeCirculos[i].actualiza()
	}
}

// Llamada a las funciones inicio() y animacion() por primera vez para que se realice la configuración inicial y empiece la animación
inicio()
animacion()
