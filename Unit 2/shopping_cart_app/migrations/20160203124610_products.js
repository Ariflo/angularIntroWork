
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", function(table) {
    table.string("_id")
    table.string("name");
    table.string("ingredients");
    table.integer("caffeineScale");
    table.integer("price");
    table.boolean("inStock");
    table.integer("rating");
    table.string("imageUrl");
    table.integer("__v");
    table.string("categories");
  });
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('products');
};
