const { validate, Joi } = require('express-validation');

module.exports = validate({
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    clienteId: Joi.number().integer().required(),
    dataAtendimento: Joi.date().required(),
    observacao: Joi.string().required(),
  })
})


