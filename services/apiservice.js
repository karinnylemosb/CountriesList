const { json } = require('express');
const api = require('./api'); 


module.exports.getAll = async () =>{
    return api.get('all');
}
  
 

