// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

var x, y, dx, dy, radio

const init = () => {
	radio = Math.random() * 20 + 1
	x = Math.random() * innerWidth
	y = Math.random() * innerHeight
	dx = (Math.random() - 0.5) * 10
	dy = (Math.random() - 0.5) * 10
}

const animate = () => {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, innerWidth, innerHeight)

	c.beginPath()
	c.arc(x, y, 20, 0, 2 * Math.PI)
	c.strokeStyle = 'black'
	c.stroke()
	c.fillStyle = 'coral'
	c.fill()
	if (x > innerWidth || x <= 0) dx = -dx
	if (y > innerHeight || y <= 0) dy = -dy
	x += dx
	y += dy
}

init()
animate()
