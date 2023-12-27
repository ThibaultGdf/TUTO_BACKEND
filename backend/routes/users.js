var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({message: 'Vous êtes sur la route de users !'});
});

module.exports = router;
