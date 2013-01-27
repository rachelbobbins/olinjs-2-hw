
/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./db')
  , routes = require('./routes')
  , user = require('./routes/user')
  , cat = require('./routes/cat')
  , http = require('http')
  , path = require('path')
  , flash = require('connect-flash');

var app = express();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
    app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());;
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')))

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/cats/new', cat.create);
app.get('/cats', cat.by_age);
app.get('/cats/color/:color', cat.with_color);
app.get('/cats/delete/old', cat.delete_oldest);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
