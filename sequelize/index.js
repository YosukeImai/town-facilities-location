const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

const modelDefiners =  [
    require('./models/facility.model')
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

module.exports = sequelize;
