const express = require('express')
const routes = express.Router()

const product = require('./controllers/product')

routes.get('/products', product.index)
routes.post('/products', product.store)

module.exports = routes
