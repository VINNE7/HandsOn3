const Cliente = require('../models/Cliente');
const Atendimento = require('../models/Atendimento');
const Psicologo = require('../models/Psicologo');


module.exports = {
  async index(req, res) {

    try {
      const atendimentos = await Atendimento.findAll();
      return res.json(atendimentos).status(200);

    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "An error has ocurred" })
    }

  },

  async store(req, res) {
    try {
      // console.log(req.body);

      const { clienteId, dataAtendimento, observacao } = req.body;

      // console.log(req.auth);
      // console.log(clienteId);
      // console.log(psicologoId);
      // console.log(dataAtendimento);

      const cliente = await Cliente.findByPk(clienteId);
      const psicologo = await Psicologo.findByPk(req.auth.id);

      if (!cliente) {
        return res.status(400).json({ error: 'Cliente not found' })
      }

      if (!psicologo) {
        return res.status(400).json({ error: 'Psicologo not found' });
      }

      const atendimento = await Atendimento.create({
        "data-atendimento": dataAtendimento,
        "cliente_id": clienteId,
        "psicologo_id": req.auth.id,
        observacao,
      })




      return res.json(atendimento);

    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  },

  async show(req, res) {
    const {id} = req.params;

    try{
      const atendimento = await Atendimento.findByPk(id);

      if(!atendimento){
       return res.status(404).json({
          message: "Atendimento não encontrado",
        });
      }

      return res.json(atendimento).status(200);

      
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  },

  async update(req, res){
    const idAtendimento = req.params.id;

    try{
      const {dataAtendimento, observacao} = req.body;

      const atendimento = await Atendimento.findByPk(idAtendimento);


      console.log(atendimento.psicologo_id);
      console.log(req.auth.id);

      if(!(atendimento.psicologo_id == req.auth.id)){
        return res.status(400).json({message: "Not Authorized"});
      }

      if(!atendimento){
        return res.status(404).json({
          message: "atendimento não encontrado",
        });
      };

      await Atendimento.update({"data-atendimento" : dataAtendimento, observacao}, {where: {id: idAtendimento}});

      const atendimentoUpdated = await Atendimento.findByPk(idAtendimento);

      return res.json(atendimentoUpdated).status(200);


    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "An error has ocurred" })
    }
  },

  async destroy(req, res){
    const {id} = req.params;

    try{
      const atendimento = await Atendimento.findByPk(id);

      if(!atendimento){
        return res.status(404).json({
          message: "Atendimento não encontrado",
        });
      }

      // await (await Atendimento.findByPk(id)).destroy();
      // console.log(atendimento);

      await atendimento.destroy();


      return res.status(204).send("");


    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "An error has ocurred" })
    }

  }

}