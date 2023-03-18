const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('facility',{
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type:DataTypes.STRING,
            unique: true,
            validate:{
                is: /^\w{3,}$/
            }
        },
        category: {
            allowNull: false,
            type:DataTypes.STRING,
            unique: false
        },
        postal_code: {
            allowNull: false,
            type:DataTypes.STRING,
            unique: false
        },
        location: {
            allowNull: false,
            type:DataTypes.STRING,
            unique: false
        },
        longitude: {
            allowNull: false,
            type:DataTypes.DOUBLE,
            unique: false
        },
        latitude: {
            allowNull: false,
            type:DataTypes.DOUBLE,
            unique: false
        },
        tel: {
            allowNull: true,
            type:DataTypes.STRING,
            unique: false
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    });
}