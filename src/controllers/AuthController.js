const Psicologo = require('../models/Psicologo');
const jwt =  require('jsonwebtoken');
const secret = require('../config/secret')
const bcrypt = require('bcryptjs');

module.exports = {

  async login(req, res){
    const {email, senha} = req.body;

    const usuario = await Psicologo.findOne({where: {email}});

    if(!usuario){
      return res.status(400).json({error:"Email não cadastrado"});
    }

    if(!bcrypt.compareSync(senha, usuario.senha)){
      return res.status(401).json({error: "Senha inválida"});
    }

    const token = jwt.sign({id: usuario.id, email: usuario.email, nome: usuario.nome}, secret.key);

    return res.json(token)
  }

}