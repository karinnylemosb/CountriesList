var express = require('express');
var router = express.Router();
var countriesController = require('../controllers/countryController');


router.get("/",  countriesController.getCountries );

module.exports = router;


