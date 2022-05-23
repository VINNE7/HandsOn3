const Psicologo = require('../models/Psicologo');

module.exports = {
  async store (req, res){

    // console.log(req.body);

    const {nome, email, senha, apresentacao } = req.body;

    const psicologo = await Psicologo.create({
      nome,
      email,
      senha,
      apresentacao });

    return res.json(psicologo);

  }
}