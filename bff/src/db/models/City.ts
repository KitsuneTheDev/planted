import { DataTypes, Model, Sequelize } from "sequelize";

class City extends Model {
    static initModel(sequelize: Sequelize) {
        City.init({
            cityId: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            country: DataTypes.STRING,
            city: DataTypes.STRING,
            lat: DataTypes.FLOAT,
            lon: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: "cities",
            timestamps: false,
        })
    }
}

export default City;