const getUsuariosIDs = new Promise((response) => {
	setTimeout(() => {
		response([101, 102, 103, 105])
	}, 3000)
})

getUsuariosIDs
	.then((IDs) => {
		console.log(IDs)
	})
	.catch(() => {
		console.log('Error')
	})
