//Examinando el DOM

// El document
/*
console.dir(document)
console.log(document.title)
document.title = 'Prueba'
console.log(document.title)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
console.log(document.forms[0])
console.log(document.scripts)
*/

//getElementById()
/*
console.log(document.getElementById('header-title'))
console.log(document.getElementById('header-title').textContent)
console.log(document.getElementById('header-title').innerText)
console.log(document.getElementById('header-title').innerHTML)
console.log(document.getElementById('main-header').innerHTML)

var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(header)

headerTitle.textContent = 'Hola'
headerTitle.innerText = 'Adios'
headerTitle.innerHTML = '<h3 style="background-color: black">Prueba</h3>'
*/

//getElementsByClassName
/*
var items = document.getElementsByClassName('list-group-item')
console.log(items[3])
items[0].textContent = 'Prueba'
*/

//getElementsByTagName
/*
var items = document.getElementsByTagName('li')
console.log(items)
items[2].textContent = 'Prueba 02'
 */

//querySelector
// Los selectores CSS son # para id . para Class y nada para Tag

/*
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input')
input.value = 'Hola mundo'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'Enviar'

var item = document.querySelector('.list-group-item')
item.style.color = 'red'
item.innerText = 'Prueba 1'

var item = document.querySelector('li > span')
item.style.color = 'green'
item.innerText = 'Prueba 2'
 */

//querySelectorAll
/*
var items = document.querySelectorAll('.list-group-item')
items[2].style.color = 'red'

var item = document.querySelectorAll('li > span')
item[0].style.color = 'green'
item[0].innerText = 'Prueba'

var titulos = document.querySelectorAll('.title')
console.log(titulos)
titulos[0].textContent = 'Prueba'

var impar = document.querySelectorAll('li:nth-child(odd)')
var par = document.querySelectorAll('li:nth-child(even)')
for (var i = 0; i < impar.length; i++) {
	impar[i].style.backgroundColor = '#ccc'
	par[i].style.backgroundColor = '#f4f4f4'
}
*/

//ParentNode
/*
var itemList = document.querySelector('#lista-tareas')
console.log(itemList.parentNode)
var main = itemList.parentNode
main.style.backgroundColor = '#f4f4f4'
console.log(main.parentNode.parentNode)
*/

//ParentElement
/*
var itemList = document.querySelector('#lista-tareas')
console.log(itemList.parentElement)
var main = itemList.parentElement
main.style.backgroundColor = '#f4f4f4'
console.log(main.parentElement.parentElement)
*/

//childNodes
//console.log(itemList.childNodes)

//children
//console.log(itemList.children)

//firstChild/firstElementChild
/*
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Prueba'
*/

//lastChild/lasttElementChild
/*
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'Prueba'
*/

//var itemList = document.querySelector('#lista-tareas')

//previousSibling
//console.log(itemList.previousSibling)

//previousElementSibling
//console.log(itemList.previousElementSibling)

//nextSibling
//console.log(itemList.nextSibling)

//nextElementSibling
//console.log(itemList.nextElementSibling)

//createElement
//tagName

//var nuevoDiv = document.createElement('div')
/*
nuevoDiv.className = 'hola'
nuevoDiv.id = 'div-hola'
nuevoDiv.setAttribute('title', 'Hola mundo')
*/

//createTextNode
/*
var nuevoNodoText = document.createTextNode('Hola Mundo')
nuevoDiv.appendChild(nuevoNodoText)

console.log(nuevoDiv)

var contenedor = document.querySelector('.container')
console.log(contenedor)

var h1 = document.querySelector('h1')
console.log(h1)

contenedor.insertBefore(nuevoDiv,h1);
*/

//Agregar Eventos
/*
document.getElementById('boton').addEventListener('click', function () {
	console.log('Click 2')
})
document.getElementById('boton').addEventListener('click', hacerClick)

function hacerClick() {
	console.log('Has hecho click..')
	document.getElementById('header-title').textContent = 'Texto cambiado'
}
*/

//Función que se dispara al hacer click en el título de la cabecera de la página
function clickTitulo() {
	console.log('Has hecho click en el título')
	alert('Has hecho click en el título')
}

//Agregar un elemento a la lista

var form = document.getElementById('formAgregar')
var lista = document.getElementById('lista-tareas')
var filtro = document.getElementById('filtro')

//Evento submit del formulario
form.addEventListener('submit', agregarItem)

//Evento click de la lista
lista.addEventListener('click', eliminarItem)

//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems)

//Función para agregar una Tarea a la lista
function agregarItem(e) {
	e.preventDefault()
	var newItem = document.getElementById('tareaNueva').value

	var li = document.createElement('li')
	li.id = 'tarea'
	li.className = 'list-group-item lista-item'

	let titulo = document.createElement('span')
	titulo.innerText = newItem

	var botonDel = document.createElement('button')
	botonDel.className = 'btn btn-danger btn-sm float-right eliminar'
	botonDel.innerText = 'X'

	li.appendChild(botonDel)
	li.appendChild(titulo)
	lista.appendChild(li)

	document.getElementById('tareaNueva').value = ''

	var item = document.querySelectorAll('li > span')
	item[0].style.color = 'green'
	item[0].innerText = 'Elemento 0: ' + item[0].innerText
}

//Función para eliminar un Item de la lista
function eliminarItem(e) {
	if (e.target.classList.contains('eliminar')) {
		if (confirm('¿Seguro que deseas eliminar el elemento')) {
			var li = e.target.parentElement
			lista.removeChild(li)
		}
	}
}

//Función para filtrar elementos de la lista
function filtrarItems(e) {
	var texto = e.target.value.toLowerCase()
	var items = lista.querySelectorAll('#tarea')
	Array.from(items).forEach((item) => {
		console.log(item)
		var itemNombre = item.childNodes[1].textContent
		console.log(itemNombre)
		if (itemNombre.toLowerCase().indexOf(texto) != -1) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}

// Función que se dispara al hacer click en el título de la cabecera de la página
function clickTitulo() {
	console.log('Has hecho click en el título')
	alert('Has hecho click en el título')
}
