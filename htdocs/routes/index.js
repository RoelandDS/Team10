var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{"name":"test","members": [{"name":"test"},{"name":"test2"}]}]);
});

module.exports = router;
