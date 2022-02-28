const express = require('express');

// const productsRouter = require('./products.router');
const usersRouter = require('./user.router');
const authRouter = require('./auth.router')
const proyectRouter = require('./proyect.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/user', usersRouter);
  router.use('/proyect', proyectRouter);
}

module.exports = routerApi;
