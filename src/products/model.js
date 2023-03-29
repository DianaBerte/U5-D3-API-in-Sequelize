import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ProductsModel = sequelize.define(
    "product",
    {
        productId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        "name": {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        "category":
        {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        "description": {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        "imageURL": {
            type: DataTypes.STRING(350),
            allowNull: false,
        },
        "price": {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)

export default ProductsModel