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

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var Stop = require('./server/models/stops.js');
var Trip = require('./server/models/trips.js');
var User = require('./server/models/users.js');
var Stops = require('./server/collections/stops.js');
var Trips = require('./server/collections/trips.js');
var Users = require('./server/collections/users.js');

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
  Trip.forge().fetchAll().then(function(found) {
    res.send(found);
  })
});

//This route is to use Trips to query the database for all entries, for the all trips page
app.get('/api/trip/:id', function(req, res) {
  var tripID = url.parse(req.url, true);
  tripID = tripID.path.split('/')[3].replace(/%20/g, ' ');
  Stop.query('where', 'trips_id', '=', tripID).fetchAll().then(function(found) {
    console.log(found);
    res.send(found);
  })
});

//Route to increment / decrement the likes 
app.put('/api/trips/likes', function(req, res) {
  var likes = req.body.trip.likes;
  var title = req.body.trip.title;
  var type = req.body.type;
  Trip.where({title: title, likes: likes}).fetch()
    .then(function(trip){
      console.log('THE TRIP', trip);
      var temp = Number(likes);
      type === '1' ? temp += 1 : temp -= 1;
      temp = JSON.stringify(temp);
      trip.set('likes', temp);
      trip.save();
      res.status(200).end(JSON.stringify(trip));
    })
});

app.post('/api/trips/remove', function(req, res) {
  var likes = req.body.likes;
  var title = req.body.title;
  var id = req.body.user_id;
  Trip.where({title: title, likes: likes}).fetch()
      .then(function(trip){
      console.log('THE TRIP', trip);
      trip.destroy();
      Stop.where({trips_id: id}).fetchAll()
        .then(function(stops){
          console.log('The stops', stops);
          res.status(200).end();
        })
    })
});

app.post('/api/trip', function(req, res) {
  //here we want an array of ids to be sent from all the stops made in googleAPI
  var username = req.body.username;
  var tripname = req.body.tripname;
  var stopsArray = req.body.stops;

  if (!username || !tripname || !stopsArray) {
    console.log('Woops!');
    return res.sendStatus(404);
  }
  User.forge({username: username}).fetch().then(function(found) {
    Trips.create({
      users_id: found.attributes.id,
      title: tripname,
      start: stopsArray[0].stopData.stopName,
      end: stopsArray[stopsArray.length - 1].stopData.stopName,
      likes: 0
    })
    .then(function(newTrip) {
      Stop.forge().fetch().then(function() {
        for (var i = 0; i < stopsArray.length; i++) {
          Stops.create({
            trips_id: newTrip.attributes.id,
            coordinates: JSON.stringify(stopsArray[i].position),
            name: stopsArray[i].stopData.stopName,
            address: stopsArray[i].stopData.stopAddress,
            info: stopsArray[i].stopData.stopInfo
          })
        }
      }).then(function() {
        res.send(newTrip);
      })
    })
  })
});

app.get('/api/trips/:id', function(req, res, next) {
  var username = url.parse(req.url, true);
  username = username.path.split('/')[3].replace(/%20/g, ' ');
  User.forge({username: username}).fetch().then(function(found) {
    Trip.query('where', 'users_id', '=', found.attributes.id).fetchAll().then(function(trips) {
      res.send(trips);
    })
  })
});

app.get('/api/stops', function(req, res) {
  Stop.forge().fetchAll().then(function(found) {
    res.send(found);
  })
})

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
