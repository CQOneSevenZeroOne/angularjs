//回调地狱
/*setTimeout(() => {
	console.log(1)
	setTimeout(() => {
		console.log(2)
		setTimeout(() => {
			console.log(3)
		}, 1000)
	}, 1000)
}, 1000)*/
new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log(1)
		resolve()
	}, 1000)
}).then(() => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(2)
			resolve()
		}, 1000)
	})
}).then(() => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(3)
			resolve()
		}, 1000)
	})
})