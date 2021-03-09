// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

for (let i = 0; i < 60; i++) {
	for (let j = 0; j < 60; j++) {
		c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i + j) * 50})`
		c.fillRect(j * 20, i * 20, 10, 10)
	}
}

c.font = '50px Comic Sans MS'
c.fillStyle = 'red'
c.textAlign = 'center'
c.fillText('Hello World!', canvas.width / 2, canvas.height / 2)
