var db = require('../models/user');
var User = require('../models/user');

var Users = new db.Collection(); // create collection

Users.model = User; // set the collection's model

module.exports = Users;