process.env.PORT = 5000;

var request = require('supertest')
	, app = require('../server')
	, expect = require('chai').expect
	, session = require('supertest-session');

beforeEach(function () {
  testSession = session(app);
})

describe('the dashboard', function(){

	it("load the dash", function(done){
		testSession.get('/')
		.expect(200)
		.end(function(err, res){
			if(err){
				return done(err);
			}
			expect(res.text).to.contain('booh');
		})
	})

})