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
            iso2: DataTypes.STRING,
            iso3: DataTypes.STRING,
            local_name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "cities",
            timestamps: false,
        })
    }
}

export default City;