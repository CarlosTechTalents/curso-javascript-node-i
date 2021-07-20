function setup() {
	createCanvas(600, 600)
}

function draw() {
	noFill()
	rect(0, 0, 600, 600, 5)

	var texto = document.getElementById('texto').value
	var tamano = document.getElementById('tamano').value
	var color = document.getElementById('color').value
	textSize(parseInt(tamano))
	fill(color)
	if (mouseIsPressed) {
		text(texto, mouseX, mouseY)
	}
}
