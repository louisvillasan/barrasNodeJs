const {Strategy, ExtractJwt} = require('passport-jwt');
const config = require('../../config/config.js')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: encodeURIComponent(config.secretTokenKey)
}

const jwtStrategy = new Strategy(options, (payload,done)=>{
    return done(null, payload);
})


module.exports = jwtStrategy;