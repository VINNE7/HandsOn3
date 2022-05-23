'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('clientes', 'data-de-nascimento', {
        type: Sequelize.DATEONLY,
        allowNull: false,
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.changeColumn('clientes', 'data-de-nascimento', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
