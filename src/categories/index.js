import express from "express";
import categoriesModel from "./model.js";

const categoriesRouter = express.Router()

categoriesRouter.post("/", async (req, res, next) => {
    try {
        const { categoryId } = await categoriesModel.create(req.body)
        res.status(201).send({ categoryId })
    } catch (error) {
        next(error)
    }
})

export default categoriesRouter