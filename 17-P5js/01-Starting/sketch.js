function setup() {
	createCanvas(600, 600)
}

function draw() {
	if (mouseIsPressed) {
		fill('blue')
	} else {
		fill(255)
	}
	ellipse(mouseX, mouseY, 80, 80)
}
