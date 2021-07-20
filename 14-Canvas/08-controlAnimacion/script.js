// http://w3.unpocodetodo.info/jsblog/requestanimationframe.php

var c = document.getElementById('c')
var ctx = c.getContext('2d')
var cw = c.width
var ch = c.height

var rad = Math.PI / 180

var angulo = 5
var parado = true
var elId

ctx.strokeStyle = '#d16'
ctx.fillStyle = 'rgba(255,255,255,.1)'
ctx.translate(cw / 2, ch / 2)
ctx.strokeRect(-75, -75, 150, 150)

function girar() {
	ctx.strokeRect(-75, -75, 150, 150)
	ctx.rotate(rad * angulo)
	ctx.fillRect(-cw / 2, -ch / 2, cw, ch)
	elId = window.requestAnimationFrame(girar)
}

function start() {
	elId = window.requestAnimationFrame(girar)
	parado = false
}
function stopAnimacion() {
	if (elId) {
		window.cancelAnimationFrame(elId)
	}
	parado = true
}

c.addEventListener(
	'click',
	function () {
		parado == true ? start() : stopAnimacion()
	},
	false
)
