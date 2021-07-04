import { readFile } from 'fs'

readFile('./texto.txt', 'utf8', function (err, data) {
	if (err) {
		return console.log(err)
	}

	console.log(data)
})
