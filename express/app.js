'use strict'
const express = require('express');

const routes = {
    facility: require('./routes/facilities'),
};

const app = express();

function makeHandlerAwareOfAsyncErrors(handler){
    return async function(req, res, next){
        try{
            await handler(req, res);
        }catch(error){
            next(error);
        }
    }
}

app.get('/', (req, res) => {
    res.send('Hello, Town facilities location api!')
});

for (const [routeName, routeController] of Object.entries(routes)){
    if(routeController.getAll){
        app.get(
            `/api/${routeName}`,
            makeHandlerAwareOfAsyncErrors(routeController.getAll)
        )
    }
}

module.exports = app;