// Desestructuracion Objetos

const getDatosMascotas = () => {
	const mascotas = {
		nombre: 'Kira',
		anoDeNacimiento: 2012,
		datos: {
			especie: 'Perro',
			raza: 'Coker',
			sexo: 'F'
		}
	}
	return mascotas
}

let {
	datos,
	datos: { raza: race }
} = getDatosMascotas()

console.log(datos)
console.log(race)
