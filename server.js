// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig'); //templating engine used to load index.html
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var url = require('url');

var _ = require('underscore');

var request = require('request');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//var serverRoutes = require('./server/serverRoutes.js');


//////////////////////////////////////////////////

var app = express();

app.set('port', 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var Stops = require('./server/models/stops.js');
var Trips = require('./server/models/trips.js');
var Users = require('./server/models/user.js');


app.get('/api/trips', function(req, res) {
  //This route is to use Trips to query the database for all entries, for the all trips page
  
  //Trip.collection().fetch().then(function(data) {
  //  res.send(data);
  //})
  
  res.send({ title: "Swim with spartans", user: "ben", start: "Shizouka", end:"Tokyo", likes: 10000 });
});

app.post('/api/trips', function(req, res) {
  //here we want an array of ids to be sent from all the stops made in googleAPI
  
  //var stop_ids = req.body.stop_ids; //array of ids
  // new Trip(req.body).save()
  //   .then(function(trip){
  //     return trip.stops().attach(stop_ids);
  //   }).catch(function(error){
  //      console.log(error);
  //   });
});


app.get('/api/trips/:id', function(req, res, next) {
  //This route is used when navigating to a users own page, want to query for only his related trips
  //below is just example of potential way to do this

  // var name = url.parse(req.url, true);
  // name = name.path.split('/')[3].replace(/%20/g, ' ');
  // console.log('thename', name);

  //Trip.collection().fetchAll({name: name}).then(function(data) {
  //  res.send(data);
  //})
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});