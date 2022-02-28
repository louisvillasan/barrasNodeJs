const Joi = require('joi');

const id = Joi.number().integer();


const getProyectSchema = Joi.object({
  id: id.required(),
});

module.exports = { getProyectSchema }
