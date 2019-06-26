const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Lucas!')
})

app.listen(3000)