// Inicializa Firestore con los datos de configuración

// Your web app's Firebase configuration

var firebaseConfig = {
	apiKey: 'AIzaSyBDChRngd2rXjHG7SKPVoiS2cDY9JO7x-Q',
	authDomain: 'listatareaspro.firebaseapp.com',
	projectId: 'listatareaspro',
	storageBucket: 'listatareaspro.appspot.com',
	messagingSenderId: '799614537166',
	appId: '1:799614537166:web:d76a38485e54de4daaaf9f'
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()
