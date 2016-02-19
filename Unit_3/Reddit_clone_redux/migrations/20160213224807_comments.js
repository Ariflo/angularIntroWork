exports.up = function(knex, Promise) {
    	return knex.schema.createTable('comments', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('user_id');
		table.string('post_id');
		table.string('comment_body');
		table.timestamp('comment_time');
		table.integer('comment_score');
	});


};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('comments'); 
};
