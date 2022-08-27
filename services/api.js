const axios = require('axios');
const GeneralErrorResponse = require('../exceptions/errorHandler');
const baseUrl = "https://restcountries.com/v3.1";
const https = require('https');

//Api com problema, foi necessessário utilizar um endereço externo.

const instanceHttp = axios.create({
    baseURL: `${baseUrl}/`,
    headers: { 'content-type': 'application/json' },
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
});

instanceHttp.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw new GeneralErrorResponse(error.code, error.message)
    }
);

module.exports = instanceHttp

