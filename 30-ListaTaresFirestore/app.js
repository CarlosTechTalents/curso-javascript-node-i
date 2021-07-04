db.collection('tareas')
	.orderBy('tarea')
	.onSnapshot((snapshot) => {
		var cambios = snapshot.docChanges()
		cambios.forEach((element) => {
			if (element.type == 'added') {
				console.log(element.doc.data())
			} else if (element.type == 'removed') {
				console.log('eliminado')
			} else if (element.type == 'modified') {
				console.log('modificado')
			}
		})
	})
