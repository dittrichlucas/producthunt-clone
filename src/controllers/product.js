const mongoose = require('mongoose')

const product = mongoose.model('product')

module.exports = {
    async index(req, res) {
        const products = await product.find()

        return res.json(products)
    },

    async show(req, res) {
        const findedProduct = await product.findById(req.params.id)

        return res.json(findedProduct)
    },

    async store(req, res) {
        const createdProduct = await product.create(req.body)

        return res.json(createdProduct)
    },

    async update(req, res) {
        const updatedProduct = await product
            .findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(updatedProduct)
    }
}