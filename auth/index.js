const passport = require('passport');


const localStrategy = require('./strategies/local.strategy.js');
const jwtStrategy = require('./strategies/jwt.strategy.js');


passport.use(localStrategy);
passport.use(jwtStrategy);


module.exports = passport;