var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({userName: "Arun"});
});

router.post('/', function(req, res, next) {
  console.log(req);
  if(req.body ){
    var _name = req.body.userName;
    res.json( { message: _name + " has been Saved Successfully" })
  }
  //res.send('respond with a resource');
});

module.exports = router;
