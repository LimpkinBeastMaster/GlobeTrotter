var db = require('../db/config');
var Stop = require('../models/stops.js')

var Stops = new db.Collection();

Stops.model = Stop;

module.exports = Stops;