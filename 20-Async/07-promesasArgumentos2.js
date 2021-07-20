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

getUsuariosIDs
	.then((IDs) => {
		console.log(IDs)
		return getUsuario(IDs[3])
	})
	.then((usuario) => {
		console.log(usuario)
		return getPermisos(usuario.id)
	})
	.then((permisos) => {
		console.log(permisos)
	})
	.catch(() => {
		console.log('Error')
	})
