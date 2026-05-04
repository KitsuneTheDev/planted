import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from '../config';

export class Plant extends Model {
    static initModel(sequelize: Sequelize) {
        Plant.init({
            id: {type: DataTypes.INTEGER, primaryKey: true},
            common_name: DataTypes.STRING,
            scientific_name: DataTypes.ARRAY(DataTypes.STRING),
            other_name: DataTypes.ARRAY(DataTypes.STRING),
            family: DataTypes.STRING,
            hybrid: DataTypes.STRING,
            authority: DataTypes.STRING,
            subspecies: DataTypes.STRING,
            cultivar: DataTypes.STRING,
            variety: DataTypes.STRING,
            species_epithet: DataTypes.STRING,
            genus: DataTypes.STRING,
            care_level: DataTypes.STRING,
            watering: DataTypes.STRING,
            maintenance: DataTypes.STRING,
            indoor: DataTypes.BOOLEAN,
            tropical: DataTypes.BOOLEAN,
            drought_tolerant: DataTypes.BOOLEAN,
            growth_rate: DataTypes.STRING,
            description: DataTypes.TEXT,
            default_image: {type: DataTypes.JSONB, allowNull: true}
        }, {
            sequelize,
            tableName: "plants",
            timestamps: false,
        });
    }
};

export default Plant;