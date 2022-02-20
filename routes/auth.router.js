const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js')
const router = express.Router();



router.post('/login',
// passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role
      }
      const myJwt = jwt.sign(payload, encodeURIComponent(config.secretTokenKey));
      res.status(201).json({
        user,
        myJwt
      });
    } catch (error) {
      next(error);
    }
  }
);


router.get('/login',(req,res,next)=>{
  try {
    res.status(201).json({
      user: "papas",
      password: "con queso"
    });
  } catch (error) {
    next(error)
  }
})


module.exports = router;