const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
/*
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
});
*/
const modelDefiners =  [
    require('./models/facility.model')
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

sequelize.sync({ logging: console.log});

module.exports = sequelize;
