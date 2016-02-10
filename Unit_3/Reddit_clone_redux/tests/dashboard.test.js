process.env.PORT = 5000;

var request = require('supertest')
	, app = require('../app')
	, expect = require('chai').expect
	, session = require('supertest-session')

beforeEach(function () {
  testSession = session(app);
})

describe('the dashboard', function(){

	it("should allow the user to edit their profile", function(done){
		testSession.get('/test4/edit')
		.expect(200)
		.end(function(err, res){
			if(err){
				return done(err);
			}
			expect(res.text).to.contain('booh');
		})
	})

	it("should allow the user to change settings", function(done){
		testSession.get('/test4/settings')
		.expect(200)
		.end(function(err, res){
			if(err){
				return done(err);
			}
			expect(res.text).to.contain('DELETE ACCOUNT');
		})
	})	

	it("should allow the user to delete their profile and return to the homescreen", function(done){
		testSession.get('/test4/settings/delete')
		.expect(302)
		.expect(/Sign-Up/, done)
	})

	it("should display three input feilds that return percentages", function(done){
		testSession.get('/test4/dash/search')
		.expect(200)
		.expect()

	})

})