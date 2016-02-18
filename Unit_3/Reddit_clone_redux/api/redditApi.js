var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');
var locus = require('locus');

apiRouter.get('/user/:id', function(req, res, next) {
	knex('users').where({id:req.params.id}).first().then(function(user) {
		res.json(user);
	});
});

module.exports = apiRouter;
