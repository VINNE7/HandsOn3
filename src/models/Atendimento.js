const { Model, DataTypes } = require('sequelize');

class Atendimento extends Model {
  static init(connection){
    super.init({
      "data-atendimento": DataTypes.DATEONLY,
      observacao: DataTypes.TEXT,

    },{
      sequelize: connection,
      tableName: 'atendimentos'
    });
  }

  static associate(models){
    this.belongsTo(models.Cliente, {foreignKey: 'cliente_id', as:'cliente'});
    this.belongsTo(models.Psicologo, {foreignKey: 'psicologo_id', as:'psicologo'});
  }
}

module.exports = Atendimento;