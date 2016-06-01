// "sort" /users requests here
var controller = require('../controllers/config');
var router = require('express').Router(); // "switch" statement for requests

//
router.get('/users', controller.users.get);
router.post('/users', controller.users.post);



