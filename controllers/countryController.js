const {convertToXslx} = require("../functions/convert");
var {searchCountries} = require('../functions/countries')


module.exports.getCountries = async(req, res) =>{

try{
    const countries = await  searchCountries();
    convertToXslx(countries);
  
    res.download('__dirname/Countries.xlsx', function(err){
      if(err) {
          console.log(err);
      }
    })
  
    res.contentType("json");
    console.log("O arquivo foi gerado com sucesso.");
  
    return res.status(200).send({status: 'OK', message: "Arquivo gerado na sua pasta com sucesso!"}); 

}   catch(err){
    console.error(err);
    res.send({status: 'error'});
}

}