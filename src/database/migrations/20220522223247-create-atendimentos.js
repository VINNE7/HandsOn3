'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      "data-atendimento":{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cliente_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clientes', key: 'id' },
        onUpdate: 'CASCADE',
      },
      psicologo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'psicologos', key: 'id' },
        onUpdate: 'CASCADE',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('atendimentos');
    
  }
};
