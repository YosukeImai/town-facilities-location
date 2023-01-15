const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 8080;

async function assertDatabaseConnectionOK(){
    console.log(`Checking database connection...`);

    try{
        await sequelize.authenticate();
        console.log(`Database connection OK!`);
    }catch(error){
        console.log(`Unable to connect to the database:`);
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOK();
    console.log(`Starting TOWN FACILITIES LOCATION on port ${PORT}...`);
    app.listen(PORT);
}

init();
