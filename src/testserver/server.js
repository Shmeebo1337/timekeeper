var express = require('express')
var path = require('path')
var fs = require('fs')
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
	console.log(req.body)
	res.sendStatus(200)
	fs.writeFile(path.join(__dirname, 'test.txt'), (JSON.stringify(req.body) + '\n'), {flag: 'a'}, err => {})
})

app.get('/', (req, res) => {
	res.sendStatus(200)
	console.log("test")
})

console.log("Starting Server.")
app.listen(3001)
