import { DataTypes, Model, Sequelize } from "sequelize";

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
            default_image: {type: DataTypes.JSONB, allowNull: true},

            // FROM DETAILS
            sunlight: DataTypes.ARRAY(DataTypes.STRING),
            soil: DataTypes.ARRAY(DataTypes.STRING),
            cycle: DataTypes.STRING,
            origin: DataTypes.ARRAY(DataTypes.STRING),
            watering_benchmark_value: DataTypes.STRING,
            watering_benchmark_unit: DataTypes.STRING,
            hardiness_min: DataTypes.STRING,
            hardiness_max: DataTypes.STRING,
            poisonous_to_humans: DataTypes.BOOLEAN,
            poisonous_to_pets: DataTypes.BOOLEAN,
            medicinal: DataTypes.BOOLEAN,
            edible_fruit: DataTypes.BOOLEAN,
            care_guides_url: DataTypes.STRING
        }, {
            sequelize,
            tableName: "plants",
            timestamps: false,
        });
    }
};

export default Plant;