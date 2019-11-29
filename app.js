var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
var logger = require("morgan");
var mongoose = require("mongoose");
var ejs = require('ejs')

// Requring The DotEnv file
require('dotenv').config();

// Requring The Routing Section
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes');
var adminRoutes = require('./routes/adminRoutes');
var contentRouter = require('./routes/contentRouter');

// Mounting The Express Application
var app = express();

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
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config');
	var compiler = webpack(webpackConfig);

	app.use(
		require('webpack-dev-middleware')(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath
		})
	);

	app.use(require('webpack-hot-middleware')(compiler));
}

// Connecting With DataBase
mongoose.connect('mongodb://localhost:27017/exposuresystem', { useNewUrlParser: true }, (err) => {
	err ? console.log('Not Connected To DB') : console.log('Connected Sucessfully TO DB');
});

// Providing The Paths
app.use('/admin', adminRoutes);
app.use('/users', usersRouter);
app.use('/content', contentRouter); //changed from ("/newContent", newContent)
// app.use('/newContent', newContent);
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
