var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');
var locus = require('locus');
var bcrypt = require('bcrypt');

apiRouter.get('/user/:id', function(req, res, next) {
	knex('users').where({id:req.params.id}).first().then(function(user) {
		res.json(user);
	});
});

apiRouter.get('/posts', function(req, res, next) {
	knex('users')
	.innerJoin('posts', 'users.id', 'posts.user_id')
	.then(function(data){
	    	res.json({data});
	});
});

apiRouter.get('/comments', function(req, res, next) {
	knex('comments')
	.innerJoin('posts', 'comments.post_id', 'posts.id')
	.then(function(comments){
	    	res.json({comments});
	})
});

apiRouter.post('/api/login', function(req, res) {
	eval(locus);
	// knex('users')
	// .where({username: req.body.username})
	// .first()
	// .then(function(user){
	//             if(user){
	//                   var pass = req.body.password;
	//                   bcrypt.compare(pass, user.password, function(err, result){
	//                   	// We sign enough information to determine if 
	//                   	// the user is valid in the future. 
	//                   	// In our case, username and password are required
	//                   	var token = jwt.sign({ username: user.username,
	// 		                  	           password: user.password
	// 		                  	         }, "REDDIT SECRET");
	//                   	// On success, we send the token back
	//                   	// to the browser.
	//                   	res.json({jwt:token});
	//                   })
	//         }
	//         else {
	//             res.json({
	//                 error: JSON.stringify(err),
	//                 message: "no matching user/pass combo"
	//             });
	//         }
	//     }).catch(function(err){
	//         console.log(err);
	//         res.json({
	//             error: JSON.stringify(err),
	//             message: "Error connecting to Database"
	//         })
	//     });
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
