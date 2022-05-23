'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('atendimentos', 'data-atendimento', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });
},

async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn('atendimentos', 'data-atendimento', {
    type: Sequelize.DATE,
    allowNull: false,
  });
}
};
