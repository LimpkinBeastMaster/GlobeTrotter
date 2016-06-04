 var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '123',
    database : 'test1',
    charset  : 'utf8'
  }
});

// Create connection
var db = require('bookshelf')(knex);

// Define schema below. Relationships described in models.
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table USERS', table);
    });
  }
});

db.knex.schema.hasTable('trips').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('trips', function (trips) {
      trips.increments('id').primary();
      trips.string('name', 100);
      trips.integer('users_id');
      trips.string('start',100);
      trips.string('end',100);
      trips.integer('likes');
      trips.timestamps();
    }).then(function (table) {
      console.log('Created Table TRIPS', table);
    });
  }
});

db.knex.schema.hasTable('stops').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('stops', function (stops) {
      stops.increments('id').primary();
      stops.integer('trips_id');
      stops.string('coordinates', 100);
      stops.string('name', 100);
      stops.string('address', 100);
      stops.string('info', 100);
      stops.timestamps();
    }).then(function (table) {
      console.log('Created Table STOPS', table);
    });
  }
});

module.exports = db;
// usage in other files: var db = require('./path/to/db')