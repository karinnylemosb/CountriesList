const {convertToXslx} = require("../functions/convert");
const {searchCountries} = require('../functions/countries')
const {HttpError} = require("../functions/errors");


module.exports.getCountries = async(_req, res) =>{

try{
    const countries = await  searchCountries();
    convertToXslx(countries);
    const file = `${__basedir}/countries.xlsx`;  
    res.download(file);    
    res.contentType("json");
    console.log("O arquivo foi gerado com sucesso.");  
    res.status(200).send({status: 'OK', message: "Arquivo gerado na sua pasta com sucesso!"}); 

}   catch(err){
    HttpError(res, err);
}

}