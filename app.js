var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const addcategoriesRouter = require('./routes/addcategories')
const addExhibition = require('./routes/addExhibition')
const AboutRouter = require('./routes/About')
const editExhibition = require('./routes/EditExhibition')
const uploadImage = require("./routes/uploadImage")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/About', AboutRouter);
//http://localhost:3001/categories
app.use('/categories',categoriesRouter);
//http://localhost:3001/products
app.use('/products',productsRouter);
app.use('/addcategories',addcategoriesRouter);
app.use('/addExhibition',addExhibition);
app.use('/editExhibition',editExhibition);
app.use('/uploadImage',uploadImage);

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
