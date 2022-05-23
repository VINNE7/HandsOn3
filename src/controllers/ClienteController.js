const Cliente = require('../models/Cliente');

module.exports = {
  async store (req, res){

    // console.log(req.body);

    const {nome, email, dataDeNascimento } = req.body;

    const cliente = await Cliente.create({ nome, email, 'data-de-nascimento' : dataDeNascimento });

    return res.json(cliente);

  }
}