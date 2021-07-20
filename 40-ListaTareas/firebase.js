// Inicializa Firestore con los datos de configuración
// La base de datos para que sea accesible sólo con los datos de configuración siguientes, tiene que ser creada en modo de prueba
// https://firebase.google.com/docs/firestore/quickstart?authuser=0

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyA65HcwiRKJTOLefvv9XaKAPNAIBrm_Ij0',
	authDomain: 'tareas-321c5.firebaseapp.com',
	projectId: 'tareas-321c5',
	storageBucket: 'tareas-321c5.appspot.com',
	messagingSenderId: '525987882367',
	appId: '1:525987882367:web:1813653d47c1019067264a'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()
