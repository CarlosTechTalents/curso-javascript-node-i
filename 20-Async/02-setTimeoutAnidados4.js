// Funciones setTimeout anidadas

const getUsuarios = (valor) => {
	setTimeout(() => {
		const userIDs = [101, 102, 103, 105, 107]
		console.log(userIDs)
		setTimeout(
			(id) => {
				switch (id) {
					case 101:
						nombre = 'Carlos'
						break
					case 102:
						nombre = 'Lola'
						break
					case 103:
						nombre = 'Guillermo'
						break
					case 105:
						nombre = 'Hugo'
						break
					case 107:
						nombre = 'Gon'
						break
					default:
						nombre = 'Usuario no existe'
				}
				console.log(`El usuario con ID ${id} es ${nombre}`)
			},
			2000,
			userIDs[valor - 1] // Este es el parámetro que se pasa al setTimeout y carga en el argumento de entrada
		)
	}, 3000)
}

getUsuarios(4)
