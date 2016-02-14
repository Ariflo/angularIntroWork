exports.up = function(knex, Promise) {
    	return knex.schema.createTable('comments', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('post_id');
		table.string('comment');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('comments'); 
};
