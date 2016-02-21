exports.up = function(knex, Promise) {
    	return knex.schema.createTable('posts', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.integer('user_id').references('id').inTable('users');
		table.string('title');
		table.string('img_url');
		table.timestamp('post_time');
		table.text('post_body');
		table.integer('post_score');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('posts'); 
};
