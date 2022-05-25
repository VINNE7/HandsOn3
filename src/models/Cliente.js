const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      "data-de-nascimento": DataTypes.DATEONLY,
    },{
      sequelize: connection,
      tableName: 'clientes'
    });
  }
}

module.exports = Cliente;