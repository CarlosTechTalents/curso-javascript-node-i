// Async Await con argumentos

const getUsuariosIDs = new Promise((response) => {
	console.log('Esperando a getUsuariosIDs')
	setTimeout(() => {
		response([101, 102, 103, 105])
	}, 3000)
})

const getUsuario = (userID) => {
	return new Promise((resolve) => {
		console.log(`Esperando a getUsuario del usuario ${userID}`)
		setTimeout(
			(id) => {
				const usuario = {
					id: id,
					email: 'carlos@gmail.com',
					nombre: 'Carlos'
				}
				resolve(usuario)
			},
			3000,
			userID
		)
	})
}

const getPermisos = (id) => {
	return new Promise((resolve) => {
		console.log(`Esperando a getPermisos del usuario ${id}`)
		setTimeout(
			(id) => {
				const permiso = ['admin', 'creador']
				resolve(permiso)
			},
			3000,
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
