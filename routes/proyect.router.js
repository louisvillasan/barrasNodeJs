const express = require('express');
const myPassport = require('../auth/index.js')
const ProyectService = require('./../services/proyect.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { getProyectSchema } = require('./../schemas/Proyect.schema');

const router = express.Router();
const service = new ProyectService();


router.get('/',
  myPassport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {
      const userId = req.user.sub
      console.log(userId, 'from JWT')
      const proyect = await service.findAllByUser(userId);
      res.json(proyect);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  myPassport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {
      console.log('pase');
      const userId = req.user.sub;
      const newProyect = await service.create({userId: userId});
      res.status(201).json(newProyect);
    } catch (error) {
      next(error);
    }
  }
);




router.delete('/:id',
  myPassport.authenticate('jwt', {session: false}),
  validatorHandler(getProyectSchema, 'params'),
  async (req, res, next) => {
    try {
      const userId = req.user.sub
      const { id } = req.params;
      await service.delete(id, userId);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);




router.patch('/:id',
  myPassport.authenticate('jwt', {session: false}),
  validatorHandler(getProyectSchema, 'params'),
  async (req, res, next) => {
    try {
      const userId = req.user.sub
      const { id } = req.params;
      const body = req.body;
      const proyect = await service.updateOne(id, body, userId);
      res.json(proyect);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;
