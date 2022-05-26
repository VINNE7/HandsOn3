const { validate, Joi } = require('express-validation');

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    dataDeNascimento: Joi.date().required(),
  })
})