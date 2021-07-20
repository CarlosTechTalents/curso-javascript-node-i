let imagen

function setup() {
	createCanvas(600, 600)
	noCursor()
}

function preload() {
	imagen = loadImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png')
}

function cambiaPersonaje() {
	var personaje = document.getElementById('personaje').value
	imagen = loadImage(personaje)
}

function draw() {
	background(255)
	rect(0, 0, 600, 600, 10)
	text(mouseX + ',' + mouseY, 20, 20)
	image(imagen, mouseX - 50, mouseY - 50, 100, 100)
}
