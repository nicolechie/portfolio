// require('./db/connect');
// var express = require('express');
// var bodyParser = require('body-parser');
// // var itemRoutes = require('./routes/item');
// var passport = require('passport');
// var app = express();

// app.use(bodyParser.json());
// app.use(express.static('client'));

//   app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(bodyParser.json());
//   app.use(passport.initialize());

// require('./routes/blog.server.route.js')(app);
// require('./routes/home.server.route.js')(app);
// require('./routes/user.server.route.js')(app, passport);

// app.listen(process.env.PORT || 8080, function() {
//     console.log('Listening on port 8080');
// });

// exports.app = app;


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();

//Set default NODE_ENV and MONGO LINK 
if (!process.env.NODE_ENV) { 
    process.env.NODE_ENV = 'development';
    process.env.MONGODB_NW = 'mongodb://nicolechie:rukka2016@ds147995.mlab.com:47995/portfolio';
}

  app.use(express.static(__dirname + '/client'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

require('./routes/blog.server.route.js')(app);
require('./routes/home.server.route.js')(app);
require('./routes/user.server.route.js')(app, passport);

// mongoose.connect('mongodb://nicolechie:rukka2016@ds147995.mlab.com:47995/portfolio').then(function() {
//     app.listen(process.env.PORT || 8080 );
// });

mongoose.connect(process.env.MONGODB_NW).then(function(err) {
    if (err) {
        console.log("error", err);
    }
   app.listen(process.env.PORT || 8080);
    console.log("connected", process.env.PORT);
});

exports.app = app;