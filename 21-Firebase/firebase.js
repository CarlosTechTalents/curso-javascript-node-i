//
// Inicializa Firestore con los datos de configuración
// La base de datos para que sea accesible sólo con los datos de configuración siguientes, tiene que ser creada en modo de prueba
// https://firebase.google.com/docs/firestore/quickstart?authuser=0

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBHU1L1jQkXJe0Im5O6IS8yLw5uA49zXEw',
	authDomain: 'cursojavascripttechtalen-b1f3e.firebaseapp.com',
	projectId: 'cursojavascripttechtalen-b1f3e',
	storageBucket: 'cursojavascripttechtalen-b1f3e.appspot.com',
	messagingSenderId: '361108930526',
	appId: '1:361108930526:web:c1a0a192b33db39f9c274f'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()
