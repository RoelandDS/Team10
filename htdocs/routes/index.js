var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{"name":"Team10","members": [{"name":"Simon De Boeck"},{"name":"Jelle Van den Steen"}]}]);
});

module.exports = router;
