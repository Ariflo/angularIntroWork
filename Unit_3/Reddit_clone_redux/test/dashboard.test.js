process.env.PORT = 8000;
process.env.NODE_ENV = 'test';

var request = require('supertest')
	, app = require('../server')
	, expect = require('chai').expect
	, session = require('supertest-session');

beforeEach(function () {
  testSession = session(app);
})

describe('the homepage', function(){
	it("should load", function(done){
		testSession.get('/')
		.expect(200)
		.end(function(err, res){
			if(err){
				return done(err);
			}
			expect(res.text).to.contain('Gal');
			done();
		})

	})	
})