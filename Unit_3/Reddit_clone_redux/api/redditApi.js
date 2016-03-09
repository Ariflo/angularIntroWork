var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');
var locus = require('locus');
var bcrypt = require('bcrypt');
var  jwt = require('jsonwebtoken');
require('dotenv').config()

apiRouter.get('/', function(req,res,next){
	res.render('index');
})

apiRouter.get('/user/:id', function(req, res, next) {
		if (req.headers.authorization) {

			var token = req.headers.authorization.split(' ')[1];
			var decoded = jwt.verify(token, process.env.JWT_SECRET);

			res.json({decoded});
		}
});

apiRouter.get('/posts', function(req, res, next) {
	knex('users')
	.innerJoin('posts', 'users.id', 'posts.user_id')
	.then(function(data){
	    	res.json({data});
	});
});


//SIGNUP
apiRouter.post('/users', function(req, res) {
	knex('users').where({username: req.body.username}).first().then(function(user){
	  if(user || req.body.password !== req.body.passwordconfirm){

		    res.json({
		        error: JSON.stringify(err),
		        message: "email already in use/passwords do not match"
		    });
	  }else{
	    bcrypt.genSalt(10, function(err, salt){

	        bcrypt.hash(req.body.password, salt, function(err, hash){
	        knex('users').insert({username: req.body.username, password: hash}).returning('id').then(function(id){
	        	// We sign enough information to determine if 
	            // the user is valid in the future. 
	            // In our case, username and password are required
	        	var token = jwt.sign({id: id,
	        			         username: req.body.username
		        	                 }, process.env.JWT_SECRET);

	        	// On success, we send the token back
	        	// to the browser.
	        	res.json({jwt:token});
	        });
	      });
	    });
	  }
	}).catch(function(err){
	        console.log(err);
	        res.json({
	            error: JSON.stringify(err),
	            message: "Error connecting to Database"
	        })
    	});
});

//SIGNIN
apiRouter.post('/login', function(req, res) {
	    knex('users').where({username: req.body.username}).first()
	    .then(function(user){
	    	if(user){
	    		var pass = req.body.password;
	    		bcrypt.compare(pass, user.password, function(err, result){
	    			if(result){
	    				// We sign enough information to determine if
	    				// the user is valid in the future.
	    				// In our case, username and password are required
	    				var token = jwt.sign({ id: user.id,
	    					username: req.body.username
	    				                 }, process.env.JWT_SECRET);

	    				// On success, we send the token back
	    				// to the browser.
	    				res.json({jwt:token});
	    			}else{
					res.json({
			            		error: JSON.stringify(err),
			            		message: "no matching user/password combo"
				        	});
	    			}
	    		});
	    	}else{
	    		res.json({
	                		error: JSON.stringify(err),
	                		message: "no matching user/password combo"
	            	});
	    	}

	    }).catch(function(err){
	        console.log(err);
	        res.json({
	            error: JSON.stringify(err),
	            message: "Error connecting to Database"
	        })
	    });
});



//Posts into DB
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
	    .returning('id')
	    .then(function(id){
	    	res.json({id:id[0]})
	    });
});

apiRouter.post('/comments', function(req, res, next) {
	knex('comments')
	    .insert({user_id: req.body.userId,
	    	    post_id: req.body.postId,
	    	    comment_body:req.body.comment,
	    	    comment_time: new Date(),
	    	    comment_score: 0})
	    .then(function(){
	    	res.send("saved");
	    })
});



apiRouter.put('/posts/:id', function(req, res, next) {
	if(req.body.stat === 'up'){
		knex('posts')
		.where({id:req.body.id})
		.increment('post_score', 1)
		.returning('post_score')
		.then(function(score){
			res.json({score:score[0]});
		});	
	}else{
		knex('posts')
		.where({id:req.body.id})
		.decrement('post_score', 1)
		.returning('post_score')
		.then(function(score){
			res.json({score:score[0]});
		});

	}	

});


module.exports = apiRouter;