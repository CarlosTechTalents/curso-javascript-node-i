document.addEventListener('DOMContentLoaded', () => {
	var elems = document.querySelectorAll('.modal')
	M.Modal.init(elems)
})

const lista = document.getElementById('lista-tareas')

// Función para renderizar en pantalla cada tarea
const renderListItem = (doc) => {
	let li = document.createElement('li')
	li.setAttribute('data-id', doc.id)
	li.className = 'collection-item'
	li.innerHTML = `
			<div>
				<span>${doc.data().tarea}</span>
				<a href="#!" class="secondary-content" onclick="clickBtnBorrar('${doc.id}')"><i class="material-icons">delete</i></a>
				<a href="#!" class="secondary-content" onclick="clickBtnEditar(this)"><i class="material-icons">edit</i></a>
			</div>
		`
	lista.appendChild(li)
}

const clickBtnBorrar = (id) => {
	if (confirm('Vas a borrar el registro: ' + id)) {
		db.collection('tareas').doc(id).delete()
	}
}

const clickBtnEditar = (element) => {
	var id = element.parentElement.parentElement.getAttribute('data-id')
	confirm('Vas a editar el registro: ' + id)
}

const formularioAgregarTarea = document.getElementById('agregar-tarea-form')

formularioAgregarTarea.addEventListener('submit', (evento) => {
	evento.preventDefault()
	db.collection('tareas').add({
		tarea: formularioAgregarTarea.tareaInput.value,
		tipoDeTarea: 'tarea de clase de programación',
		timestamp: new Date()
	})
	formularioAgregarTarea.tareaInput.value = ''
})

// Llamo a la base de datos de Firestore
// La primera llamada me devuelve todos los documentos
// Y se queda a la escucha de cambios
// Y con cada documento que recibe de la base de datos llama a la función de render

// Crea el evento click de editar el item de la lista
/*editBtn = document.getElementById('tarea')
editBtn.addEventListener('click', (e) => {
	idActualizar = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
	textoActualizar = e.target.parentElement.parentElement.querySelector('span').innerText
	var myModal = new bootstrap.Modal(document.getElementById('editModal'), {})
	document.getElementById('tareaActual').placeholder = textoActualizar
	myModal.show()
	console.log(idActualizar)
})
*/

// Código  que se ejecuta al cargar la página
db.collection('tareas')
	.orderBy('tarea')
	.onSnapshot((snapshot) => {
		var cambios = snapshot.docChanges()
		cambios.forEach((cambio) => {
			if (cambio.type === 'added') {
				renderListItem(cambio.doc)
			}
			if (cambio.type === 'modified') {
				renderListItem(cambio.doc)
			}
			if (cambio.type === 'removed') {
				console.log(lista)
				let li = lista.querySelector(`[data-id=${cambio.doc.id}]`)
				lista.removeChild(li)
			}
		})
	})
