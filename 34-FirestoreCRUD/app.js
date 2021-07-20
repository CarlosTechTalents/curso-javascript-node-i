// Formas de agregar los SDK web a tu aplicación:
// https://firebase.google.com/docs/web/learn-more#modular-version

// Reference de Firestore:
// https://firebase.google.com/docs/firestore/manage-data/add-data#web-v8
// https://firebase.google.com/docs/firestore/query-data/get-data#web-v8

// https://firebase.google.com/docs/firestore/query-data/queries
// https://firebase.google.com/docs/firestore/query-data/listen

// CRUD Create Read Update Delete

// Create un nuevo documento en la colección "ciudades"
const ciudad = {
	name: 'Madrid',
	state: 'MA',
	country: 'ESP'
}

db.collection('ciudades')
	.doc('MAD')
	.set(ciudad)
	.then(() => {
		console.log('Document successfully written!')
		listarCiudades()
	})
	.catch((error) => {
		console.error('Error writing document: ', error)
	})

// Read todos los datos
const listarCiudades = () => {
	db.collection('ciudades')
		.orderBy('name', 'asc')
		.get()
		.then((datos) => {
			datos.forEach((doc) => {
				console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
			})
		})
}

// Create otro documento en la colección "ciudades"
db.collection('ciudades')
	.doc('LA')
	.set({
		name: 'Los Angeles',
		state: 'CA',
		country: 'USA'
	})
	.then(() => {
		console.log('Document 2 successfully written!')
		listarCiudades()
	})
	.catch((error) => {
		console.error('Error writing document: ', error)
	})

// Buscar un documento por ID
db.collection('ciudades')
	.doc('MAD')
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

// UPDATE

db.collection('ciudades')
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

db.collection('ciudades')
	.doc('LA')
	.delete()
	.then(() => {
		console.log('Document successfully deleted!')
		listarCiudades()
	})
	.catch((error) => {
		console.error('Error removing document: ', error)
	})
