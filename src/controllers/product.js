const mongoose = require('mongoose')

const product = mongoose.model('product')

module.exports = {
    async index(req, res) {
        const products = await product.find()

        return res.json(products)
    }
}