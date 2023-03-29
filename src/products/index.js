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

export default productsRouter