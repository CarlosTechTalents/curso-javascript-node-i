//////////////////
// Ejercicio 04 //
//////////////////

/* Ejercicio de bucles */

/*
Dada una variable con un valor string, escribir el contenido de la variable en vertical.

Por ejemplo: texto='Carlos'
Resultado:

C
a
r
l
o
s

Referencias:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String

*/

texto = 'Carlos'

for (var i = 0; i < texto.length; i++) {
	console.log(texto[i])
}
