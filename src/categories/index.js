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

categoriesRouter.get("/", async (req, res, next) => {
    try {
        const categories = await categoriesModel.findAll({
            attributes: ["categoryName", "categoryId"],
        })
        res.send(categories)
    } catch (error) {
        next(error)
    }
})

export default categoriesRouter