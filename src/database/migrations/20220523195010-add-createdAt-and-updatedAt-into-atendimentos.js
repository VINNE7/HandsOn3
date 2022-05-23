'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('atendimentos', 'created_at', {
        type: Sequelize.DATE,
        allowNull: false,
      });

      queryInterface.addColumn('atendimentos', 'updated_at',{
        type: Sequelize.DATE,
        allowNull: false
      } )
},

async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('atendimentos', 'created_at');
   await queryInterface.removeColumn('atendimentos', 'updated_at');
}
};