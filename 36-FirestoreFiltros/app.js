// Formas de agregar los SDK web a tu aplicación:
// https://firebase.google.com/docs/web/learn-more#modular-version

// Reference de Firestore:
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-v8
// https://firebase.google.com/docs/firestore/query-data/get-data#web-v8

// https://firebase.google.com/docs/firestore/query-data/queries
// https://firebase.google.com/docs/firestore/query-data/listen

// CRUD Create Read Update Delete

// Crear datos en bloque

const citiesRef = db.collection('cities')

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
	await citiesRef.doc('DC').set({
		name: 'Washington, D.C.',
		state: null,
		country: 'USA',
		capital: true,
		population: 680000
	})
	await citiesRef.doc('TOK').set({
		name: 'Tokyo',
		state: null,
		country: 'Japan',
		capital: true,
		population: 9000000
	})
	await citiesRef.doc('BJ').set({
		name: 'Beijing',
		state: null,
		country: 'China',
		capital: true,
		poblacion: 21500000
	})
	listarCiudades()
	buscaCiudad('MAD')
	datosFiltrados()
}

// Read todos los datos
const listarCiudades = () => {
	db.collection('cities')
		.orderBy('name', 'asc')
		.get()
		.then((datos) => {
			datos.forEach((doc) => {
				console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
			})
		})
}

// Buscar un documento por ID
const buscaCiudad = (ciudadABuscar) => {
	db.collection('cities')
		.doc(ciudadABuscar)
		.get()
		.then((doc) => {
			if (doc.exists) {
				console.log('Document data:', doc.data())
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!')
			}
		})
		.catch((error) => {
			console.log('Error getting document:', error)
		})
}

// Filtra datos

const datosFiltrados = () => {
	db.collection('cities')
		.where('population', '>', 1000000)
		.get()
		.then((datos) => {
			datos.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, ' => ', doc.data())
			})
		})
		.catch((error) => {
			console.log('Error getting documents: ', error)
		})
}

cargaCiudades()

// Read todos los datos
const listarData = () => {
	db.collection('tareas')
		.orderBy('titulo', 'desc')
		.get()
		.then((datos) => {
			datos.forEach((doc) => {
				console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
			})
		})
}

listarData()

// Read Cambios
db.collection('tareas').onSnapshot((todosLosDatos) => {
	var cambios = todosLosDatos.docChanges()
	cambios.forEach((element) => {
		if (element.type == 'added') {
			console.log(element.doc.data())
		} else if (element.type == 'removed') {
			console.log('eliminado')
		} else if (element.type == 'modified') {
			console.log('modificado')
			console.log(element.doc.data())
		}
	})
})

// Create a new document in collection "cities"
const ciudad = {
	name: 'Madrid',
	state: 'MA',
	country: 'ESP'
}

db.collection('citiesEUR')
	.doc('MAD')
	.set(ciudad)
	.then(() => {
		console.log('Document successfully written!')
	})
	.catch((error) => {
		console.error('Error writing document: ', error)
	})

// UPDATE

db.collection('citiesEUR')
	.doc('MAD')
	.update({
		pais: 'ESPAÑA'
	})
	.then(() => {
		console.log('Document successfully updated!')
	})
	.catch((error) => {
		// The document probably doesn't exist.
		console.error('Error updating document: ', error)
	})

// DELETE

db.collection('citiesEUR')
	.doc('LA')
	.delete()
	.then((doc) => {
		console.log('Document successfully deleted!')
	})
	.catch((error) => {
		console.error('Error removing document: ', error)
	})
