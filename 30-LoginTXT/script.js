const archivoTXT = 'usuarios.csv'

const borrarDatosFormulario = (retardo) => {
	setTimeout(() => {
		document.getElementById('formularioLogin').reset()
		console.log('Formulario borrado')
	}, retardo)
}

// Al cargar el formulario lo borro de posibles datos autofill que carga el navegador
document.addEventListener('DOMContentLoaded', borrarDatosFormulario(600))

// Función al validar el formulario
document.getElementById('formularioLogin').addEventListener('submit', (event) => {
	event.preventDefault()
	const { usuario, email, password } = event.target.elements

	// o
	// const { usuario, email, password } = this.elements

	console.log(usuario.value, email.value, password.value)

	// Debido a que la función fetch accede por el canal HTTP, este ejemplo se debe ejecutar desde un servidor, como LiveServer

	fetch(archivoTXT)
		.then((response) => {
			return response.text() // Devuelve una promesa con los datos del fichero TXT o CSV
		})

		.then((datosCSV) => {
			return convertCSVToJSON(datosCSV, ',') // Devuelve los datos del fichero convertidos a JSON
		})

		.then((datosJSON) => {
			console.log(datosJSON)
			console.log('Total datos del fichero: ' + datosJSON.length)

			// Compruebo si el usuario es valido filtrando el
			return datosJSON.find((obj) => {
				if (
					('usuario' in obj && obj.usuario == usuario.value && 'password' in obj && obj.password == password.value) ||
					('email' in obj && obj.email == email.value && 'password' in obj && obj.password == password.value)
				) {
					return true
				} else {
					return false
				}
			})
		})

		.then((usuarioValido) => {
			if (usuarioValido) {
				borrarDatosFormulario(0)
				sessionStorage.setItem('usuarioId', usuarioValido.id)
				sessionStorage.setItem('usuarioNombre', usuarioValido.usuario)
				sessionStorage.setItem('usuarioEmail', usuarioValido.email)
				return (window.location.href = './home.html')
			} else {
				let mensaje = document.getElementById('mensaje-formulario')
				mensaje.innerHTML = 'Usuario y password no validos'
				mensaje.style.visibility = 'visible'
				var inputs = document.getElementById('formularioLogin').getElementsByTagName('input')
				for (i in inputs) inputs[i].disabled = true
				return
			}
		})

		.catch((error) => {
			alert(error) // Código a ejecutar cuando se rechaza la promesa
		})
})

const ocultarMensaje = () => {
	borrarDatosFormulario(0)
	var inputs = document.getElementById('formularioLogin').getElementsByTagName('input')
	for (i in inputs) inputs[i].disabled = false
	let mensaje = document.getElementById('mensaje-formulario')
	mensaje.innerHTML = ''
	mensaje.style.visibility = 'hidden'
}

// https://medium.com/@sanderdebr/converting-csv-to-a-2d-array-of-objects-94d43c56b12d
const convertCSVToJSON = (str, delimiter = ',') => {
	const arrayFila0 = str.slice(0, str.indexOf('\n')).trim().split(delimiter)
	const arrayFilas = str
		.slice(str.indexOf('\n') + 1)
		.trim()
		.split('\n')
	return arrayFilas.map((fila) => {
		const arrayValoresFila = fila.split(delimiter)

		//Convierto los valores numéricos a número y el resto los deja igual
		const valoresFormatoNumero = arrayValoresFila.map((valor) => {
			return isNaN(Number(valor)) ? valor : Number(valor)
		})

		return arrayFila0.reduce((object, curr, i) => ((object[curr] = valoresFormatoNumero[i]), object), {})
	})
}
