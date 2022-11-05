const app = require('./express/app');
//const sequelize = require('./sequelize');
const PORT = 3000;

async function init() {
    console.log(`Starting TOWN FACILITIES LOCATION on port ${PORT}...`);
    app.listen(PORT);
}

init();
