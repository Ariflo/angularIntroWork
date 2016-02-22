var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var locus = require('locus');
var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('index',  {username: 'to Redditer'});
});

router.post('/new', function(req, res, next) {
    knex('users').where({username: req.body.username}).first().then(function(user){
      if(user || req.body.password !== req.body.pwConfirm){
        res.redirect('/#/new/error');
      }else{
        bcrypt.genSalt(10, function(err, salt){

            bcrypt.hash(req.body.password, salt, function(err, hash){

            knex('users').insert({username: req.body.username, password: hash}).returning('id').then(function(id){
              res.redirect('/#/user/'+ id);
            });
          });
        });
      }
    });
});

router.get('/user', function(req, res, next) {
              res.redirect('/'); 
});


router.get('/signout', function(req, res){
  req.session = null;
  res.redirect('/');
});

module.exports = router;
