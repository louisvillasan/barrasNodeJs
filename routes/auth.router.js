const express = require('express');
const passport = require('passport');
const myPassport = require('../auth/index.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js')
const router = express.Router();

router.post('/login',
passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id
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


module.exports = router;