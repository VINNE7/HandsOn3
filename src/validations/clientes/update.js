const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    dataDeNascimento: Joi.date(),
  }),
});
