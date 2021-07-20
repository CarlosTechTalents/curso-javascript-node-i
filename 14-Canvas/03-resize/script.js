// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

// Defino el primer canvas del HTML obteniendo su referencia por el id y creo su contexto
const canvas1 = document.getElementById('canvas1')
canvas1.width = window.innerWidth
canvas1.height = window.innerHeight / 4

const c1 = canvas1.getContext('2d')

// Defino el segundo canvas del HTML obteniendo su referencia por el id y creo su contexto
const canvas2 = document.getElementById('canvas2')
canvas2.width = 400
canvas2.height = 100

const c2 = canvas2.getContext('2d')

// Escribo algo en ambos canvas
const init = () => {
	c1.font = '24px Comic Sans MS'
	c1.fillText('CanvaX 1', 20, 50)
	c1.fillText(canvas1.width + ' x ' + canvas1.height, canvas1.width / 2, canvas1.height / 2)

	c2.font = '20px Courier New'
	c2.fillText('Canvas 2', 20, 50)
	c2.fillText(canvas2.width + ' x ' + canvas2.height, canvas2.width / 2, canvas2.height / 2)
}

// Uso un retardo con setTimeout en caso de cambiar el tamaño de la ventana para evitar eventos continuos mientras cambia el tamaño de la ventana
// Desde el trigger de evento al cambiar tamaño de la ventana mando como parámetro la función a ejecutar con retardo
const retardo = (func) => {
	let timer
	return () => {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(func, 100)
	}
}

// Si se produce el evento resize de la ventana vuelvo a dibujar el canvas que depende del tamaño de la ventana y llamo a una función de retardo y a la función inicial para escribir algo en ambos canvas
window.addEventListener(
	'resize',
	retardo(() => {
		canvas1.width = window.innerWidth
		canvas1.height = window.innerHeight / 4

		init()
	})
)

init()
