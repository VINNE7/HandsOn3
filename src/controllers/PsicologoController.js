const Psicologo = require('../models/Psicologo');

module.exports = {
  async index(req, res){
    try{
      const psicologos = await Psicologo.findAll();
      res.json(psicologos).status(200);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  },

  async store(req, res){

    // console.log(req.body);

    const {nome, email, senha, apresentacao } = req.body;

    const psicologo = await Psicologo.create({
      nome,
      email,
      senha,
      apresentacao });

    return res.json(psicologo);

  },

  async show(req, res){
    const {id} = req.params;
    
    try{
      const psicologo = await Psicologo.findByPk(id);

      if (!psicologo) {
        res.status(404).json({
          message: "Psicólogo não encontrado",
        });
      }

      res.json(psicologo).status(200);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }

  },

  async update(req, res) {
    const {id} = req.params;

    try {
      const {nome, email, senha, apresentacao} = req.body;

      const psicologo = await Psicologo.findByPk(id);

      if(!psicologo){
        res.status(404).json({
          message: "Psicólogo não encontrado",
        });
      }

      await Psicologo.update({nome, email, senha, apresentacao}, {where: {id: id} });

      const psicologoUpdated = await Psicologo.findByPk(id);

      res.json(psicologoUpdated).status(200);


    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }

  },

  async destroy(req, res){
    const {id} = req.params;
    
    try{
      const psicologo = await Psicologo.findByPk(id);

      if(!psicologo){
        res.status(404).json({
          message: "Psicólogo não encontrado",
        });
      }

      await psicologo.destroy();

      res.status(204).send("");

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  }
}