const boom  = require('@hapi/boom');
const {Strategy } = require('passport-local');
const UserService = require('../../services/user.service.js')
const bcrypt = require('bcrypt');


const service = new UserService();

const localStrategy = new Strategy(
    {
        usernameField: 'email'    
    }
    ,async(email, password, done) =>{
    try {
        const user = await service.findByEmail(email);
        if (!user){
            done(boom.unauthorized(), false)
        }
        // console.log(user);
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch){
            delete user.dataValues.password;
            done(null, user);
        } else{
            done(boom.unauthorized(), false)
        }
        
    } catch (error) {
        done(error, false)
       }
});





module.exports = localStrategy