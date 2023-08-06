exports.up = function (knex) {
  return knex.schema
    .createTable('roles', (table) => {
      table.increments('id').primary(), table.string('name').notNullable();
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.integer('password').defaultTo(1234567);
      table.string('profilePicture');
      table.string('bio');
      table.string('birthdate').notNullable();
      table.string('passwordChangeAt').defaultTo(null);
      table
        .integer('roleId')
        .defaultTo(2)
        .notNullable()
        .references('id')
        .inTable('roles');
      table.timestamps(true, true);
    })
    .createTable('tweets', (table) => {
      table.increments('id').primary();
      table
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table.string('content', 280).notNullable();
      table.integer('likes').unsigned().defaultTo(0);
      table.integer('retweets').unsigned().defaultTo(0);
      table.timestamps(true, true);
    })
    .createTable('likes', (table) => {
      table.increments('id').primary();
      table
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table
        .integer('tweetId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tweets');
      table.timestamps(true, true);
    })
    .createTable('retweets', (table) => {
      table.increments('id').primary();
      table
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table
        .integer('tweetId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tweets');
      table.timestamps(true, true);
    })
    .createTable('follows', (table) => {
      table.increments('id').primary();
      table
        .integer('followerUserId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table
        .integer('followedUserId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table.timestamps(true, true);
    })
    .createTable('hashtags', (table) => {
      table.increments('id').primary();
      table.string('text').notNullable();
      table.timestamps(true, true);
    })
    .createTable('tweetHashtags', (table) => {
      table
        .integer('tweetId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tweets');
      table
        .integer('hashtagId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('hashtags');
      table.timestamps(true, true);
    })
    .createTable('settings', (table) => {
      table.increments('id').primary();
      table
        .integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      table.boolean('darkMode').defaultTo(false);
      table.boolean('notifications').defaultTo(false);
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('settings')
    .dropTable('tweetHashtags')
    .dropTable('hashtags')
    .dropTable('follows')
    .dropTable('retweets')
    .dropTable('likes')
    .dropTable('tweets')
    .dropTable('users')
    .dropTable('roles');
};
