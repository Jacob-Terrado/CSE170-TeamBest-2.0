
/**
 * Module dependencies`
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var store = require('./routes/store');
var inventory = require('./routes/inventory');
var tutorial = require('./routes/tutorial');
var profile = require('./routes/profile');
var friends = require('./routes/friends');
var checkin = require('./routes/checkin');
var friendsCheckin = require('./routes/friendsCheckin');
// Example route
// var user = require('./routes/user');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/store', store.view);
app.get('/inventory', inventory.view);
app.get('/store', store.view);
app.get('/tutorial', tutorial.view);
app.get('/profile', profile.view);
app.get('/friends', friends.view);
app.get('/checkin', checkin.view);
app.get('/friendsCheckin', friendsCheckin.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
