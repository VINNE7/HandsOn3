const { validate, Joi } = require('express-validation');

module.exports = validate({
  body: Joi.object({
    clienteId: Joi.number().integer().required(),
    dataAtendimento: Joi.date().required(),
    observacao: Joi.string().required(),
  })
})