var Promise = require('bluebird');
var Trip = require('./trips');
var db = require('../db/config');

var Stop = db.Model.extend({

  tableName: 'stops',
  hasTimestamps: true,
  trips: function() {
    return this.belongsTo(Trip);
  }

});

module.exports = Stop;