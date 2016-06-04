var db = require('../db/config');
var Trip = require('../models/trips.js')

var Trips = new db.Collection();

Trips.model = Trip;

module.exports = Trips;