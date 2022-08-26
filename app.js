const express = require("express");
const bodyParserErrorHandler = require('express-body-parser-error-handler');
const app =  express();
const router = require("./routes/countryRoutes");


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParserErrorHandler());

const port = process.env.PORT || 8080;

app.use(express.json());

app.use (router);

app.listen (port, () =>{
  console.log("Iniciando ...");
  console.log("Servidor está carregado!");
  console.log (`Acesse http://localhost:${port}`);
});

