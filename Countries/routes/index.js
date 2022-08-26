const {convertToXslx} = require("../models/convert");
var {BuscaPaises} = require('../models/paises')
var express = require('express');
var router = express.Router();

router.get("/", async (req, res) => { 

  const paises = await  BuscaPaises();
  convertToXslx(paises);

  res.download('__dirname/Teste.xlsx', function(err){
    if(err) {
        console.log(err);
    }
  })

  res.contentType("../Teste.xlsx");
  res.contentType("json");
  res.send({status: "OK"});
    
})


module.exports = router;


