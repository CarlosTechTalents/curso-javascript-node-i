var arr = ['a', , 'c']
var sparseKeys = Object.keys(arr)
var denseKeys = [...arr.keys()]

console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]

for (x of sparseKeys) {
	console.log(x + '-->' + arr[x])
}

for (x of denseKeys) {
	console.log(x + '-->' + arr[x])
}

for (x of denseKeys) {
	if (!arr[x]) console.log(x + ' Está vacio')
}
