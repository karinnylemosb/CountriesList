var axios = require('axios');
const baseUrl = "https://restcountries.com/v3.1";

//Api com problema, foi necessessário utilizar um endereço externo.
module.exports = axios.create({
    baseURL: `${baseUrl}/`,
    headers: { 'content-type': 'application/json' },
});

