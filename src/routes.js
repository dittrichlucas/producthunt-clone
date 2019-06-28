const express = require('express')
const routes = express.Router()

const product = require('./controllers/product')

routes.get('/products', product.index)

module.exports = routes
