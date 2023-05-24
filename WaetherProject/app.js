const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
	const query = req.body.cityName
	const units = 'metric'
	const apiKey = '9a82c8272039a1b61fd34cc1d86f6f06'
	const url = `https://api.openweathermap.org/data/2.5/weather?units=${units}&q=${query}&appid=${apiKey}`

	https.get(url, function (response) {
		console.log(response)

		response.on('data', function (data) {
			const weatherData = JSON.parse(data)
			const temp = weatherData.main.temp
			const descr = weatherData.weather[0].description
			const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

			res.write(
				'<h1>The temperature in ' +
					query +
					' is: ' +
					temp +
					' degrees Celcius</h1>'
			)
			res.write('<p>The weather is currently ' + descr + '</p>')
			res.write(`<img src="${icon}">`)
			res.send()
		})
	})
})

app.listen(3000, function () {
	console.log('Server is running on port 3000.')
})
