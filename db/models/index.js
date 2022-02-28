const {UserSchema, User} = require('./user.model.js');
const {ProyectSchema, Proyect} = require('./proyect.model.js');


function setUpModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Proyect.init(ProyectSchema, Proyect.config(sequelize));
    
    // User.associate(sequelize.models);
    Proyect.associate(sequelize.models);
}

module.exports = setUpModels;