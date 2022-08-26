const { json } = require('express');
var api = require('./api'); 


module.exports.getAll = async () =>{
    return api.get('all').then((response) => (response.data))
}
  
 

