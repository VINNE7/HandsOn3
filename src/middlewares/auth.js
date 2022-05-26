const { expressjwt : jwt } = require("express-jwt");

const secret = require("../config/secret");

module.exports = jwt({
  secret: secret.key,
  algorithms: ["HS256"],
});
