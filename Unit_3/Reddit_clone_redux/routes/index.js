var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var locus = require('locus');
var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/new', function(req, res, next) {
  	knex('users').where({username: req.body.username}).first().then(function(user){
  		if(user){
  			res.redirect('/#/new');
  		}else{
  			bcrypt.genSalt(10, function(err, salt){

  				bcrypt.hash(req.body.password, salt, function(err, hash){

  					knex('users').insert({username: req.body.username, password: hash}).then(function(){
  						res.redirect('/#/');
  					});
  				});
  			});
  		}
  	});
});

module.exports = router;
