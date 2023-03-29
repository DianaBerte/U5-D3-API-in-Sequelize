import express from "express";
import createHttpError from "http-errors";
import ProductsModel from "./model.js";

const productsRouter = express.Router()

export default productsRouter