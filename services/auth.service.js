const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('./user.service.js');
const service = new UserService();

class AuthService{
        
    async getUser(email, password){
        const user = await service.findByEmail(email);
        
        if (!user){
            throw boom.unauthorized();
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            throw boom.unauthorized();
        }
        
        delete user.dataValues.password;
        return user 
    }
}

module.exports = AuthService;