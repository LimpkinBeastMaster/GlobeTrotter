var Promise = require('bluebird');
var db = require('../db/config');
var Stop = require('./stops');
var User = require('./user');

var Trip = db.Model.extend({

  tableName: 'trips',
  hasTimestamps: true,
  stops: function() {
    return this.hasMany(Stop);
  },

  users: function() {
    return this.belongsToMany(User);
  }

});

module.exports = Trip;