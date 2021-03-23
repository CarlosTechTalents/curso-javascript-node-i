// https://www.w3schools.com/tags/ref_canvas.asp
// https://flaviocopes.com/canvas/

const canvas1 = document.getElementById('canvas1')
canvas1.width = window.innerWidth
canvas1.height = 100

const c1 = canvas1.getContext('2d')

const canvas2 = document.getElementById('canvas2')
canvas2.width = 400
canvas2.height = 100

const c2 = canvas2.getContext('2d')

c1.font = '24px Comic Sans MS'
c1.fillText('CanvaX 1', 20, 50)
c1.fillText(canvas1.width + ' x ' + canvas1.height, canvas1.width / 2, canvas1.height / 2)

c2.font = '20px Courier New'
c2.fillText('Canvas 2', 20, 50)
c2.fillText(canvas2.width + ' x ' + canvas2.height, canvas2.width / 2, canvas2.height / 2)
