// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

c.fillStyle = `white`
c.fillRect(100, 100, 100, 100)

for (let i = 0; i < 61; i++) {
	for (let j = 0; j < 61; j++) {
		c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i + j) * 50})`
		c.strokeRect(j * 20, i * 20, 20, 20)
	}
}
