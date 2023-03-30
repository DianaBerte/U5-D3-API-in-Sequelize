import { DataTypes } from "sequelize";
import categoriesModel from "../categories/model.js";
import sequelize from "../db.js";
import productsCategoriesModel from "./productsCategoriesModel.js";

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
        // "categoryId":
        // {
        //     type: DataTypes.STRING(250),
        //     allowNull: false,
        // },
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

//Many to many relationship
ProductsModel.belongsToMany(categoriesModel, {
    through: productsCategoriesModel,
    foreignKey: { name: "id", allowNull: false }
})
categoriesModel.belongsToMany(ProductsModel, {
    through: productsCategoriesModel,
    foreignKey: { name: "id", allowNull: false },
})

export default ProductsModel