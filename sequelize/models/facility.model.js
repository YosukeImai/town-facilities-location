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
    },
    {
        freezeTableName: true,
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    });
}