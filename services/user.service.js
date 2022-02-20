const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize.js')
const bcrypt = require('bcrypt');

class UserService {
  constructor() {
  }

  async create(data) {
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create(data);
    delete newUser.dataValues.password;
    return newUser;
  }


  async findOne(id) {

    const user = await models.User.findByPk(id)

    if (!user){
      throw boom.notFound('User not Found');
    }

    return user ;
  }
  
  async findByEmail(email) {

    const user = await models.User.findOne({
      where: { email }
    });

    return user;
  }

  async update(id, changes) {

    const user = await this.findOne(id).update(changes);
    return user;
  }

  async delete(id) {
    await (await this.findOne(id)).destroy();
    return id;
  }
}

module.exports = UserService;
