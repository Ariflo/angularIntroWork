var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');
var locus = require('locus');

apiRouter.get('/user/:id', function(req, res, next) {
	knex('users').where({id:req.params.id}).first().then(function(user) {
		res.json(user);
	});
});

apiRouter.post('/posts', function(req, res, next) {
	knex('posts')
	    .insert(
	    	{user_id: req.body.userId,
	    	 title:req.body.title,
	    	 img_url:req.body.image,
	    	 post_time: new Date(),
	    	 post_body:req.body.post_body,
	    	 post_score: 0
	    })
	    .then(function(){
	    	res.redirect('/#/user/' + req.body.userId);
	    })
});

module.exports = apiRouter;
