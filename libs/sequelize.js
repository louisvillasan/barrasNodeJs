const {Sequelize} = require('sequelize');

const {config}= require('../config/config.js');
const setUpModels = require('../db/models/index.js');


// console.log(config.dbPassword);

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =  ('postgres://' + USER + ':' + PASSWORD 
    + '@' + config.dbHost + ':' 
    + config.dbPort + '/' + config.dbName);
    
const mySequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,

});

setUpModels(mySequelize);

// mySequelize.sync();

module.exports = mySequelize;