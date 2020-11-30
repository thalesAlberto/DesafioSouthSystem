const Product = require("../model/Product");
const mongoose = require("mongoose");

class ProductController {

    createProduct(req, res) {
        return Product.create(req.body).then(data => {
            return res.status(200).json(data);
        }).catch(err => {
            if (err.errors.type || err.errors.name) {
                return res.status(400).send("Campo obrigatório");
            }
            return res.status(500).send("Erro desconheçido, contate o administrador");
        });
    }

    getAllProducts(req, res) {
        return Product.find({}).then(data => {
            return res.status(200).json(data);
        }).catch(err => res.sendStatus(500));
    }

    getProductById(req, res) {
        let id = mongoose.Types.ObjectId(req.params.id);
        return Product.findById(id).then(data => {
            return res.status(200).json(data);
        }).catch(err => res.sendStatus(500));
    }

    updateProductById(req, res) {
        let id = req.params.id;
        let body = req.body;
        return Product.findByIdAndUpdate(id, body, {new: true}).then(data => {
            return res.status(200).json(data);
        }).catch(err => res.sendStatus(500));
    }

    deleteProductById(req, res) {
        let id = req.params.id;
        return Product.findByIdAndDelete(id).then(() => {
            return res.sendStatus(200)
        }).catch(err => res.sendStatus(500));
    }

    deleteAll(req, res) {
        return Product.deleteMany().then(() => res.sendStatus(200)).catch(err => res.sendStatus(500));
    }
}

module.exports = new ProductController();