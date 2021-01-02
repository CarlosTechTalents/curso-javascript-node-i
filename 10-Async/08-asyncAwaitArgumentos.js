const getUsuariosIDs = new Promise((response, reject) => {
	setTimeout(() => {
		response([101, 102, 103, 105])
	})
})

const getUsuario = (userID) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(id) => {
				const usuario = {
					email: 'carlos@gmail.com',
					nombre: 'Carlos'
				}
				resolve(`${id}-${usuario.email}-${usuario.nombre}`)
			},
			1500,
			userID
		)
	})
}

const getPermisos = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(id) => {
				const permiso = ['admin', 'creador']
				resolve(permiso)
			},
			1500,
			id
		)
	})
}

async function getUsuariosAW() {
	const IDs = await getUsuariosIDs
	console.log(IDs)
	const usuario = await getUsuario(IDs[3])
	console.log(usuario)
	const permisos = await getPermisos(usuario.id)
	console.log(permisos)
}

getUsuariosAW()
