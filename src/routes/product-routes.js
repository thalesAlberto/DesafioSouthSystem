const express = require("express");
const routes = express.Router();
const productController = require('../controller/product-controller.js');

routes.get("/product", productController.getAllProducts);
routes.get("/product/:id", productController.getProductById);
routes.post("/product", productController.createProduct);
routes.put("/product/:id", productController.updateProductById);
routes.delete("/product/:id", productController.deleteProductById);
routes.delete("/product/", productController.deleteAll);

module.exports = routes;