const Cliente = require('../models/Cliente');
const Atendimento = require('../models/Atendimento');
const Psicologo = require('../models/Psicologo');


module.exports = {
  async store (req, res){

    console.log(req.body);

    const {clienteId, psicologoId, dataAtendimento, observacao} = req.body;
   

    console.log(clienteId);
    console.log(psicologoId);

    const cliente = await Cliente.findByPk(clienteId);
    const psicologo = await Psicologo.findByPk(psicologoId);

    if(!cliente){
      return res.status(400).json({error: 'Cliente not found'})
    }

    if(!psicologo){
      return res.status(400).json({error: 'Psicologo not found'});
    }

    const atendimento = await Atendimento.create({
      "data-atendimento" : dataAtendimento,
      "cliente_id" : clienteId,
      "psicologo_id" : psicologoId,
      observacao,
    })


    

    return res.json(atendimento);

  }
}