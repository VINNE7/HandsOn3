'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('atendimentos', 'observacao', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
},

async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('atendimentos', 'observacao');
}
};