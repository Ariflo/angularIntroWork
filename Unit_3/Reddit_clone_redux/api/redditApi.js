var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');
var locus = require('locus');

apiRouter.get('/user/:id', function(req, res, next) {
	knex('users').where({id:req.params.id}).first().then(function(user) {
		res.json(user);
	});
});

apiRouter.get('', function(req, res, next) {
	eval(locus);
	// knex.select().table('posts').where({id: req.params.id}).first().then(function(post) {
	// 	if(post){
	// 		res.redirect('/#/');
	// 	}else{
	// 		knex('posts').insert({user_id: req.body., password: hash}).returning('id').then(function(id){
 //  						res.redirect('/#/user/'+ id);
 //  			});
	// 	}
	// });
});

apiRouter.post('/', function(req, res, next) {
	// knex('authors').insert(req.body).then(function(insert) {
	// 	knex.select().table('authors').then(function(authors) {
	// 		res.json(authors);
	// 	});
	// });
});

apiRouter.put("/:id", function(req, res, next) {
	// knex('authors').update(req.body).where({"id" : req.params.id}).then(function(insert) {
	// 	knex.select().table('authors').then(function(authors) {
	// 		res.json(authors);
	// 	});
	// });

}).delete(function(req, res, next) {
	// knex('authors').where({"id":req.params.id}).del();
});

module.exports = apiRouter;
