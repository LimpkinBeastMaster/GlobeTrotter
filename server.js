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
var allData = require('./data.js');

//console.log('alldata', allData);
//To add in all the hardcoded data
// for(var i = 0; i < allData.default.length; i++) {
//    new Trips({title: allData.default[i].title, user: allData.default[i].user, start: allData.default[i].start, end: allData.default[i].end, likes: allData.default[i].likes}).save()
//  //  console.log('savingtrip', allData.default[i]);
// }

//////////////////////////////////////////////////

app.get('/api/trips', function(req, res) {
 //This route is to use Trips to query the database for all entries, for the all trips page
  Trips.collection().fetch()
    .then(function(data) {
      res.send(data);
    });
});

app.put('/api/trips/likes', function(req, res) {
  console.log('REQ BODY', req.body);

  var likes = req.body['trip[likes]'];
  var title = req.body['trip[title]'];
  var user  = req.body['trip[user]'];
  var type = req.body.type;

  console.log('TYPE:',req.body.type);

  Trips.where({title: title, user: user, likes: likes}).fetch()
    .then(function(trip){
      console.log(trip);
      var temp = Number(likes);
      type === '1' ? temp += 1 : temp -= 1;
      //temp += 1;
      temp = JSON.stringify(temp);
      console.log('THE LIKES', temp);
      trip.set('likes', temp);
      trip.save();
      res.status(200).end(JSON.stringify(trip));
    })

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