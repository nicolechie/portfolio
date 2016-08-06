// // var mongoose = require('mongoose');
// // var express = require('express');
// // var bodyParser = require('body-parser');
// // var app = express();


// //   app.use(express.static(__dirname + '/client'));

// //   app.use(bodyParser.json());

// // // require('./routes/user.js')(app, passport);
// // // require('./routes/codefile.js')(app, passport);

// // var http = require('http');

// // var server = http.Server(app);

// // mongoose.connect('mongodb://localhost/auth').then(function() {
// //     server.listen(8080 || process.env.PORT);
// // });

// // exports.app = app;

// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// var config = require('./config');

// var app = express();

// app.use(bodyParser.json());
// app.use(express.static('client'));

// var runServer = function(callback) {
//     mongoose.connect(config.DATABASE_URL, function(err) {
//         if (err && callback) {
//             return callback(err);
//         }

//         app.listen(config.PORT, function() {
//             console.log('Listening on localhost:' + config.PORT);
//             if (callback) {
//                 callback();
//             }
//         });
//     });
// };

// if (require.main === module) {
//     runServer(function(err) {
//         if (err) {
//             console.error(err);
//         }
//     });
// }

// exports.app = app;
// exports.runServer = runServer;

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();

  app.use(express.static(__dirname + '/client'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

require('./routes/blog.server.route.js')(app);
require('./routes/home.server.route.js')(app);
require('./routes/user.server.route.js')(app, passport);

var http = require('http');

var server = http.Server(app);

mongoose.connect('mongodb://localhost/auth').then(function() {
    server.listen(8080 || process.env.PORT);
});

exports.app = app;