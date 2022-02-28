const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize.js');

class ProyectService {

  constructor(){
  }

  async create(data) {
    console.log(data, 'from service')
    const newProyect = await models.Proyect.create(data);
    return newProyect;
  }

  async findOneByUser(userId, id) {

    const data = await models.Proyect.findAll({
      where: {
        userId: userId,
        id: id
      }
    });
    return data;
  }

  async findAllByUser(userId) {

    const data = await models.Proyect.findAll({
      where: {
        userId: userId
      }
    });
    return data;
  }

  async findOne(id) {
    const proyect = await models.Proyect.findByPk(id);
    if (!proyect) {
      throw boom.notFound('proyect not found');
    }
    if (proyect.isBlock) {
      throw boom.conflict('proyect is block');
    }
    console.log(proyect)
    return proyect;
  }

  async updateOne(id, changes, userId) {
    const proyect = await this.findOneByUser(userId, id);
    const updateProyect = await proyect[0].update(changes)
    return updateProyect;
  }

  
  async delete(id, userId) {
    const proyect = await this.findOneByUser(userId, id);
    await proyect[0].destroy()
    return { id };
  }


}

module.exports = ProyectService;
