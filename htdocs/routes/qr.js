var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '173.194.105.180',
  user     : 'student',
  password : 'mulestudent',
  database : 'training'
});



/* GET users listing. */
router.get('/', function(req, res, next) {
  

	connection.query('SELECT * FROM `qr_code`', function(err, rows, fields) {
  	if (err) throw err;

  	rows.forEach(function(entry) {
  		if(entry.img_title === '[Team10]'){
  			var buff= new Buffer(entry.img_data.toString('base64'),'base64');
  			res.write(buff);
  		}
    	
	});
	});

	
});

module.exports = router;
