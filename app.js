var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var sportsRouter = require('./routes/sports');
var foodRouter = require('./routes/food');
var fashionRouter = require('./routes/fashion');
var electronicRouter = require('./routes/electronic');
var petRouter = require('./routes/pet');
var homeRouter = require('./routes/home');
var stationeryRouter = require('./routes/stationery');
var editAccRouter = require('./routes/edit_acc');
var hbs = require('express-handlebars');
var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir:__dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/sports', sportsRouter);
app.use('/food', foodRouter);
app.use('/fashion', fashionRouter);
app.use('/electronic', electronicRouter);
app.use('/pet', petRouter);
app.use('/home', homeRouter);
app.use('/stationery', stationeryRouter);
app.use('/edit_acc', editAccRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
