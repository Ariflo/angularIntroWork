exports.up = function(knex, Promise) {
  return knex.schema.createTable('postComments', function(table){
    table.increments();
    table.integer('post_id').unsigned().index().references('id').inTable('posts');
    table.integer('comment_id').unsigned().index().references('id').inTable('comments');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postComments');
};
