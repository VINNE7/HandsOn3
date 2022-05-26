'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('psicologos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        apresentacao: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
       });  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('psicologos');
  }
};
