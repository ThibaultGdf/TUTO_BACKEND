var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: "Vous êtes sur la route de l'index !"});
});

module.exports = router;
