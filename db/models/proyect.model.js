const {Model, DataTypes, Sequelize} = require('sequelize');
const {USER_TABLE} = require('./user.model.js')

const PROYECT_TABLE = 'proyects';

const ProyectSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title:{
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
        defaultValue: 'Nuevo proyecto'
    },
    description:{
        allowNull: true,
        type: DataTypes.TEXT,
        defaultValue: 'Comienza a escribir...'
    },
    about:{
        allowNull: true,
        type: DataTypes.TEXT,
        defaultValue: 'Aqui puedes colocar, links, ideas, inspiracion para tu proyecto'
    },
    userId:{
        field: 'userId',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Proyect extends Model{
    
    static associate(models){
        this.belongsTo(models.User, {
            as: 'user'
        });

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROYECT_TABLE,
            modelName: 'Proyect',
            timestamps: false
        }
    }

}
module.exports = {PROYECT_TABLE, ProyectSchema, Proyect}


