exports.up = function(knex, Promise) {
    	return knex.schema.createTable('posts', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('user_id');
		table.string('post');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('posts'); 
};
