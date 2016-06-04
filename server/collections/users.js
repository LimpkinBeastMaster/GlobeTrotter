var db = require('../db/config');
var User = require('../models/users.js')

var Users = new db.Collection();

Users.model = User;

module.exports = Users;