const express = require('express');
const routes = require('./routes');
const handleError = require("./middlewares/handleError");

require('./database');

const app = express();

const port = 3000;

app.use(express.json());
app.use(routes);
app.use(handleError);


app.listen(port,() => {
  console.log(`Servidor executando na porta: ${port}`)
});