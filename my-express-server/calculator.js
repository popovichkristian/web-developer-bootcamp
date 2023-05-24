const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.post('/', function (req, res) {
	const num1 = Number(req.body.num1)
	const num2 = Number(req.body.num2)

	const result = num1 + num2

	res.send('Response is ' + result)
})

app.listen(3000, function () {
	console.log('Server is running on 3000 port')
})

app.get('/bmiCalculator', function (req, res) {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', function (req, res) {
	const weight = Number(req.body.weight)
	const height = Number(req.body.height)

	const result = Math.floor(weight / height ** 2)

	res.send('Your BMI is: ' + result)
})
