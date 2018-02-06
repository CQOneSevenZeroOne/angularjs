//1
$http({
	method: 'GET',
	url: 'news.json',
}).then(function successCallback(response) {
	console.log(response)
}, function errorCallback(response) {
	console.log(response)
})
//2
.then(function() {
	return $http({
		method: 'GET',
		url: 'data.json',
	})
}).then(function(data) {
	console.log(data)
})
//3
.then(function() {
	setTimeout(function() {
		console.log("定时器")
	}, 1000)
})