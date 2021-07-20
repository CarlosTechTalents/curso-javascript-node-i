/*
Valores de la propiedad readyState del objeto XMLHttpRequest

0	UNINITIALIZED	todavía no se llamó a open().
1	LOADING	todavía no se llamó a send().
2	LOADED	send() ya fue invocado, y los encabezados y el estado están disponibles.
3	INTERACTIVE	Descargando; responseText contiene información parcial.
4	COMPLETED	La operación está terminada.

Valor de la propiedad responseText: La respuesta al pedido como texto, o null si el pedido no fue exitoso o todavía no se envió. Sólo lectura.
*/

const request = new XMLHttpRequest()

console.log('Estado: ' + request.readyState)

request.addEventListener('readystatechange', (evento) => {
	console.log('Estado: ' + evento.target.readyState)

	if (evento.target.readyState === 4) {
		const datos = JSON.parse(evento.target.responseText)
		console.log(datos)
	}
})

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/')
//request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.send()
