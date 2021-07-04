// Formas de agregar los SDK web a tu aplicación:
// https://firebase.google.com/docs/web/learn-more#modular-version

// Reference de Firestore:
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-v8
// https://firebase.google.com/docs/firestore/query-data/get-data#web-v8

// https://firebase.google.com/docs/firestore/query-data/queries
// https://firebase.google.com/docs/firestore/query-data/listen

// CRUD Create Read Update Delete

// Create un nuevo documento en la colección "ciudades"

const citiesRef = db.collection('ciudades2')

const cargaCiudades = async () => {
	await citiesRef.doc('SF').set({
		name: 'San Francisco',
		state: 'CA',
		country: 'USA',
		capital: false,
		population: 860000
	})
	await citiesRef.doc('LA').set({
		name: 'Los Angeles',
		state: 'CA',
		country: 'USA',
		capital: false,
		population: 3900000
	})
}

// Read todos los datos
const listarCiudades = async () => {
	try {
		const snapshot = await citiesRef.get()
		await snapshot.forEach((doc) => {
			console.log(doc.id, '=>', doc.data())
		})
	} catch (error) {
		console.error(error)
	}
}

// Buscar un documento por ID

const buscaCiudad = async (id) => {
	const busqueda = await citiesRef.doc(id).get()
	if (busqueda.exists) {
		console.log('Document data:', busqueda.data())
	} else {
		// busqueda.data() will be undefined in this case
		console.log('No such document!')
	}
}

// Prueba promesa
const hello = async (id) => {
	return await Promise.resolve(citiesRef.doc(id).get())
}

// UPDATE

const actualizaCiudad = async () => {
	try {
		await citiesRef.doc('LA').update({ population: 4100000 })
		console.log('\x1b[36m%s\x1b[0m', 'Dato Actualizado Correctamente')
	} catch (err) {
		console.error(err)
	}
}

// DELETE

const borraCiudad = async () => {
	try {
		await citiesRef.doc('SF').delete()
		console.log('\x1b[35m%s\x1b[0m', 'Dato Borrado Correctamente')
	} catch (err) {
		console.error(err)
	}
}

const ejecutarEnOrden = async () => {
	await cargaCiudades()

	await hello('LA').then((res) => {
		console.log(res.data().name)
	})

	await listarCiudades()
	await buscaCiudad('LA')
	await buscaCiudad('MAD')
	await actualizaCiudad()
	await listarCiudades()
	await borraCiudad()
	await listarCiudades()
}

ejecutarEnOrden()
