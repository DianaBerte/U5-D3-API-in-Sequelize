import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const categoriesModel = sequelize.define("category", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    categoryName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
})


export default categoriesModel