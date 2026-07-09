import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";

class Plant extends Model {
    static initModel(sequelize: Sequelize) {
        Plant.init({
            id: {type: DataTypes.UUID, primaryKey: true, defaultValue: UUIDV4},
            plant_name: DataTypes.STRING,
            growth: DataTypes.STRING,
            soil: DataTypes.STRING,
            sunlight: DataTypes.STRING,
            watering: DataTypes.STRING,
            fertilization: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "plants",
            timestamps: false,
        });
    }
};

export default Plant;