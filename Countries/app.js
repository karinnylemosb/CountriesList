const express = require("express");
const router = require("./routes/index");


const app =  express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use (router);

app.listen (port, () =>{
  console.log (`Servidor escutando em http://localhost:${port}`)
});

