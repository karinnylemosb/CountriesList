let express = require('express');
let router = express.Router();
let countriesController = require('../controllers/countryController');


router.get("/",  countriesController.getCountries );

module.exports = router;


