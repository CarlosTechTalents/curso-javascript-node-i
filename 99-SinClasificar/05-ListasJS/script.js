let hackers = ['Carlos', 'Agatha', 'Andriy', 'Ohad', 'Javier']

let largos = hackers.filter((nombre) => nombre.length < 21)
var lista = document.getElementById('lista')

largos.forEach((elemento) => {
	console.log(elemento)
	var li = document.createElement('li')
	li.innerHTML = `<li>${elemento}</li>`
	lista.appendChild(li)
})
