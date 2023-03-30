import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const productsCategoriesModel = sequelize.define("productCategory", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
})

export default productsCategoriesModel