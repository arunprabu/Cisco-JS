var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'My first Rest API' });

  var userList = [{
    "id": 1,
    "first_name": "Clement",
    "last_name": "Speer",
    "email": "cspeer0@hibu.com",
    "gender": "Male",
    "ip_address": "5.159.73.143"
  }, {
    "id": 2,
    "first_name": "Ogden",
    "last_name": "Fedorski",
    "email": "ofedorski1@google.com.au",
    "gender": "Male",
    "ip_address": "163.4.38.222"
  }];
  res.json( userList );
});

module.exports = router;
