import express from "express";
import createHttpError from "http-errors";
import ProductsModel from "./model.js";

const productsRouter = express.Router()

productsRouter.post("/", async (req, res, next) => {
    try {
        const { productId } = await ProductsModel.create(req.body)
        res.status(201).send({ productId })
    } catch (error) {
        next(error)
    }
})

productsRouter.get("/", async (req, res, next) => {
    try {
        const products = await ProductsModel.findAll()
        res.send(products)
    } catch (error) {
        next(error)
    }
})

productsRouter.get("/:productId", async (req, res, next) => {
    try {
        const product = await ProductsModel.findByPk(req.params.productId)
        if (product) {
            res.send(product)
        } else {
            next(createHttpError(404, `Product with id ${req.params.productId} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

productsRouter.put("/:productId", async (req, res, next) => {
    try {
        const [numberOfUpdatedRows, updatedRecords] = await ProductsModel.update(req.body, { where: { productId: req.params.productId }, returning: true })
        if (numberOfUpdatedRows === 1) {
            res.send(updatedRecords[0])
        } else {
            next(createHttpError(404, `Product with id ${req.params.productId} not found!`))
        }
    } catch (error) {
        next(error)
    }
})

export default productsRouter