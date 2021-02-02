const apiKey = 'dqzugLIUVhHSzJ30oJayHyYs44lSvTBq'

/* Este componente hace la búsqueda por Fetch a la API de Giphy */
/* le pasamos un keyword para la búsqueda y si viene vacio lo inicializa en un valor por defecto */
/* retorna un array con los datos de los gifs */

const getGifs = ({ keyword = 'programming' } = {}) => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`
	console.log('Ejecutando efecto')
	return (
		fetch(apiURL) // Hace la petición a la API
			.then((res) => res.json()) // Espera a la promesa y la respuesta la convierte a JSON

			// Espera a que se convierta a JSON
			.then((resJSON) => {
				// Extrae el array data de la respuesta JSON, inicializamos data como array vacio por si viene undefined
				const { data = [] } = resJSON

				// Crea un array de las URLs que aparecen en data haciendo una comprobación primero que se podría omitir.
				// ya que aunque data venga vacio y no fuese una array, lo he inicializado como array.
				if (Array.isArray(data)) {
					const gifsArray = data.map((item) => {
						const { title, id } = item
						const { url } = item.images.fixed_width
						return { title, id, url } // este el el return de cada elemento del array data que carga los elemnteos de gifsURLs
					})
					return gifsArray // este es el return de la función getGifs en caso de que data contenga datos
				}
			})
	)
}
export default getGifs
