const express = require('express')
const mongoose = require('mongoose')

// Iniciando o app
const app = express()

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/producthunt', 
    { useNewUrlParser: true }
)

// Primeira rota
app.get('/', (req, res) => {
    res.send('Hello, Lucas!')
})

app.listen(3000)