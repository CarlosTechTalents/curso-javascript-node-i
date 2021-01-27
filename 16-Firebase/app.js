console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', 'I am cyan', ' I am blue')
console.log('%cI am red %cI am green', 'color: red', 'color: green')

/*
<li class="collection-item">
  <div>
    <span>Tarea 1</span>
    <a class="secondary-content modal-trigger" href="#modal2"> <i class="material-icons">delete</i></a>
    <a class="secondary-content modal-trigger" href="#modal1"> <i class="material-icons">edit</i></a>
  </div>
</li>
</ul>
*/

const lista = document.getElementById('lista-tareas')
const formulario = document.getElementById('agregar-tarea-form')
const botonActualizar = document.getElementById('boton-actualizar')
let idActualizar = null
let nuevoTitulo = ''

const renderList = (doc) => {
	let li = document.createElement('li')
	li.className = 'collection-item'
	li.setAttribute('data-id', doc.id)

	let div = document.createElement('div')
	let titulo = document.createElement('span')
	titulo.textContent = doc.data().titulo

	let enlace = document.createElement('a')
	enlace.className = 'secondary-content modal-trigger'
	enlace.href = '#modal1'

	let editBtn = document.createElement('i')
	editBtn.className = 'material-icons'
	editBtn.innerText = 'edit'

	let deleteBtn = document.createElement('i')
	deleteBtn.className = 'material-icons secondary-content'
	deleteBtn.innerText = 'delete'

	enlace.appendChild(editBtn)
	div.appendChild(titulo)
	div.appendChild(deleteBtn)
	div.appendChild(enlace)
	li.appendChild(div)

	deleteBtn.addEventListener('click', (e) => {
		let idBorrar = e.target.parentElement.parentElement.getAttribute('data-id')
		db.collection('tareas').doc(idBorrar).delete()
	})

	editBtn.addEventListener('click', (e) => {
		idActualizar = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
		console.log(idActualizar)
	})

	lista.append(li)
}

botonActualizar.addEventListener('click', (e) => {
	nuevoTitulo = document.getElementsByName('nuevoTitulo')[0].value
	db.collection('tareas').doc(idActualizar).update({
		titulo: nuevoTitulo
	})
	document.getElementsByName('nuevoTitulo')[0].value = ''
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault()
	db.collection('tareas').add({
		titulo: formulario.titulo.value
	})
	formulario.titulo.value = ''
})

db.collection('tareas')
	.orderBy('titulo')
	.onSnapshot((snapshot) => {
		var cambios = snapshot.docChanges()
		cambios.forEach((element) => {
			if (element.type == 'added') {
				renderList(element.doc)
			} else if (element.type == 'removed') {
				let li = lista.querySelector(`[data-id=${element.doc.id}]`)
				lista.removeChild(li)
			} else if (element.type == 'modified') {
				let li = lista.querySelector(`[data-id=${element.doc.id}]`)
				li.getElementsByTagName('span')[0].textContent = nuevoTitulo
				nuevoTitulo = ''
			}
		})
		console.log(cambios)
	})
