document.getElementById('inputfile').addEventListener('change', () => {
	var archivoTXT = document.getElementById('inputfile').files[0]
	var fr = new FileReader()
	fr.onload = () => {
		document.getElementById('output').textContent = fr.result
	}
	fr.readAsText(archivoTXT)
})
