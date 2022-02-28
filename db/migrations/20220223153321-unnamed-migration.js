'use strict';

const {PROYECT_TABLE, ProyectSchema} = require('../models/proyect.model.js');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PROYECT_TABLE, ProyectSchema);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }
};
