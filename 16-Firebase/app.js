console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', 'I am cyan', ' I am blue')
console.log('%cI am red %cI am green', 'color: red', 'color: green')

const lista = document.getElementById('lista-tareas')
var filtroTareas = document.getElementById('filtroTareas')
const formAgregarTarea = document.getElementById('agregar-tarea-form')
const botonEditActualizar = document.getElementById('editActualizar')
let idActualizar = null
let nuevaTarea = ''

// A continuación la función renderListItem crea un elemento de la lista de tareas con los datos que recibe.
// El item de la lista se crea con en el orden del DOM con las etiquetas HTML
const renderListItem = (doc) => {
	// Crear un elemento nuevo de la lista y asigna el número de id de Firestore
	let li = document.createElement('li')
	li.id = 'tarea'
	li.className = 'list-group-item py-1'
	li.setAttribute('data-id', doc.id)

	// Crea las etiquetas div y span
	let div = document.createElement('div')
	let tarea = document.createElement('span')
	tarea.textContent = doc.data().tarea

	// Crea el ícono para editar posteriormente el elemento creando también una etiqueta ancla para que el cursor cambie al pasar por encima
	let editBtnEnlace = document.createElement('a')
	editBtnEnlace.href = '#!'

	let editBtn = document.createElement('i')
	editBtn.href = '!#'
	editBtn.className = 'material-icons text-info float-right'
	editBtn.innerText = 'edit'

	// Crea el evento click de editar el item de la lista
	editBtn.addEventListener('click', (e) => {
		idActualizar = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
		textoActualizar = e.target.parentElement.parentElement.querySelector('span').innerText
		var myModal = new bootstrap.Modal(document.getElementById('editModal'), {})
		document.getElementById('tareaActual').placeholder = textoActualizar
		myModal.show()
		console.log(idActualizar)
	})

	// Crea el ícono para borrar posteriormente el elemento creando también una etiqueta ancla para que el cursor cambie al pasar por encima
	let deleteBtnEnlace = document.createElement('a')
	deleteBtnEnlace.href = '#!'

	let deleteBtn = document.createElement('i')
	deleteBtn.className = 'material-icons text-info float-right'
	deleteBtn.innerText = 'delete'

	// Crea un evento click para borrar el item de la lista
	deleteBtn.addEventListener('click', (e) => {
		let idBorrar = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
		console.log(idBorrar)
		if (confirm('¡Ojo piojo! Vas a borrar una tarea!\n¿Estás seguro?')) db.collection('tareas').doc(idBorrar).delete()
	})

	// Crea el elemento final emparentando todas las etiquetas
	editBtnEnlace.appendChild(editBtn)
	deleteBtnEnlace.appendChild(deleteBtn)
	div.appendChild(tarea)
	div.appendChild(deleteBtnEnlace)
	div.appendChild(editBtnEnlace)
	li.appendChild(div)

	// Agrega el nuevo item a la lista
	lista.append(li)
}

// Evento del teclado en el campo de filtro
filtroTareas.addEventListener('keyup', filtrarTareas)

//Función para filtrar elementos de la lista
function filtrarTareas(e) {
	e.preventDefault()
	var textoFiltro = e.target.value.toLowerCase()
	var items = lista.querySelectorAll('#tarea')
	Array.from(items).forEach((item) => {
		var itemNombre = item.childNodes[0].textContent
		if (itemNombre.toLowerCase().indexOf(textoFiltro) != -1) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}

// Evento del botón actualizar del modal de editar
botonEditActualizar.addEventListener('click', (e) => {
	e.preventDefault()
	nuevaTarea = document.getElementsByName('nuevaTarea')[0].value
	db.collection('tareas').doc(idActualizar).update({
		tarea: nuevaTarea
	})
	document.getElementsByName('nuevaTarea')[0].value = ''
})

// Evento submit del form de agregar tarea.
formAgregarTarea.addEventListener('submit', (e) => {
	e.preventDefault()
	db.collection('tareas').add({
		tarea: formAgregarTarea.tarea.value
	})
	formAgregarTarea.tarea.value = ''
})

// Lectura de la base de datos de Firestore
db.collection('tareas')
	.orderBy('tarea')
	.onSnapshot((snapshot) => {
		var cambios = snapshot.docChanges()
		cambios.forEach((element) => {
			if (element.type == 'added') {
				renderListItem(element.doc)
			} else if (element.type == 'removed') {
				let li = lista.querySelector(`[data-id=${element.doc.id}]`)
				lista.removeChild(li)
			} else if (element.type == 'modified') {
				let li = lista.querySelector(`[data-id=${element.doc.id}]`)
				li.getElementsByTagName('span')[0].textContent = nuevaTarea
				nuevaTarea = ''
			}
		})
		console.log(cambios)
	})
