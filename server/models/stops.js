var Promise = require('bluebird');
var Trips = require('./trips');
var db = require('../db/config');

var Stop = db.Model.extend({

  tableName: 'stops',
  hasTimestamps: true,
  trips: function() {
    return this.belongsTo(Trips);
  }

});

module.exports = Stop;