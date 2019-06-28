const mongoose = require('mongoose')

const product = mongoose.model('product')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const products = await product.paginate({}, { page, limit: 10 })

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
    },

    async destroy(req, res) {
        await product.findByIdAndRemove(req.params.id)

        return res.send('Produto excluído com sucesso :D')
    }
}