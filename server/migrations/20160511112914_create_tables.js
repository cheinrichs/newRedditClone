
exports.up = function(knex, Promise) {
  return Promise.join(
    knex.schema.createTable('posts', function(table){
      table.increments('id');
      table.string('title', 500);
      table.string('image');
      table.integer('author').unsigned().notNullable().references('id').inTable('users');
      table.text('description');
      table.integer('votes');
      table.timestamp('date').defaultTo(knex.raw('now()')).notNullable();
    }),
    knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('username', 500);
      table.string('password', 100);
    }),
    knex.schema.createTable('comments', function(table){
      table.increments('id');
      table.integer('author_id').references('id').inTable('users');
      table.integer('post_id').references('id').inTable('posts');
      table.text('comment');
    })
  );
};

exports.down = function(knex, Promise) {
  return Promise.join(
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('posts'),
    knex.schema.dropTable('users')
  );
};
