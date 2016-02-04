var express = require('express');
var apiRouter = express.Router();
var knex = require('../db/knex');

apiRouter.get('/', function(req, res, next) {
	console.log("sanity check!");
	// knex.select().table('authors').then(function(authors) {
	// 	res.json(authors);
	// });
});

// router.get('/:id', function(req, res, next) {
// 	knex.select().table('authors').where({id: req.params.id}).then(function(authors) {
// 		res.json(authors);
// 	});
// });

// router.post('/', function(req, res, next) {
// 	knex('authors').insert(req.body).then(function(insert) {
// 		knex.select().table('authors').then(function(authors) {
// 			res.json(authors);
// 		});
// 	});
// });

// router.put("/:id", function(req, res, next) {
// 	knex('authors').update(req.body).where({"id" : req.params.id}).then(function(insert) {
// 		knex.select().table('authors').then(function(authors) {
// 			res.json(authors);
// 		});
// 	});
// }).delete(function(req, res, next) {
// 	knex('authors').where({"id":req.params.id}).del();
// });

module.exports = apiRouter;
