var Promise = require('bluebird');
var db = require('../db/config');
var Stops = require('./stops');
var Users = require('./users');

var Trip = db.Model.extend({

  tableName: 'trips',
  hasTimestamps: true,
  stops: function() {
    return this.hasMany(Stops);
  },

  users: function() {
    return this.belongsTo(Users);
  }

});

module.exports = Trip;