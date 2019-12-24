/* eslint-disable prefer-arrow-callback */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const ejs = require('ejs');
const cron = require('./utils/cron');

// Requring The DotEnv file
require('dotenv').config();

// Requring The Routing Section
const indexRouter = require('./routes/indexRouter');
const studentRouter = require('./routes/studentRouter');
const adminRouter = require('./routes/adminRouter');
const contentRouter = require('./routes/contentRouter');
const submissionRouter = require('./routes/submissionRouter');
const deliveryRouter = require('./routes/deliveryRouter');

// Mounting The Express Application
const app = express();

// view engine setup(Middle-Wares)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Webpack Configuration
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  app.use(require('webpack-hot-middleware')(compiler));
}

// Connecting With DataBase
mongoose.connect(
  'mongodb://localhost:27017/exposuresystem',
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log(err, 'Not Connected To DB');
    } else {
      console.log('Connected Sucessfully TO DB');
      require('./utils/seed');
    }
  },
);

// Providing The Paths
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/content', contentRouter);
app.use('/api/v1/submissions', submissionRouter);
app.use('/api/v1/delivery', deliveryRouter);
app.use('/', indexRouter);

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

// Exporting The Sever App
module.exports = app;
