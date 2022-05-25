const Cliente = require('../models/Cliente');

module.exports = {
  async index(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes).status(200);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  },

  async store(req, res) {

    try {
      // console.log(req.body);

      const { nome, email, dataDeNascimento } = req.body;

      const cliente = await Cliente.create({ nome, email, 'data-de-nascimento': dataDeNascimento });

      return res.json(cliente);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }

  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const cliente = await Cliente.findByPk(id);

      if (!cliente) {
        res.status(404).json({
          message: "Cliente não encontrado",
        });
      }

      res.json(cliente).status(200);

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
      const {nome, email, dataDeNascimento} = req.body;

      const cliente = await Cliente.findByPk(id);

      if(!cliente){
        res.status(404).json({
          message: "Cliente não encontrado",
        });
      }

      await Cliente.update({nome, email, 'data-de-nascimento' : dataDeNascimento}, {where: {id: id} });

      const clienteUpdated = await Cliente.findByPk(id);

      res.json(clienteUpdated).status(200);


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
      const cliente = await Cliente.findByPk(id);

      if(!cliente){
        res.status(404).json({
          message: "Atendimento não encontrado",
        });
      }

      await cliente.destroy();

      res.status(204).send("");

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  }

}