require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

//Servir contenido estatico
app.use(express.static('public'))


app.get('/', function (req, res) {
    res.send('Home Page')
})

app.get('/Hola', function (req, res) {
    res.send('Hola Abel y Familia')
})

app.get('/Elements', function (req, res) {
    res.sendFile(__dirname + '/public/Elements.html')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })