var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeUserRouter = require('./components/user/home');
var productUserRouter = require('./components/user/product');
var categoriesUserRouter = require('./components/user/categories');
var checkoutUserRouter = require('./components/user/checkout');
var loginUserRouter = require('./components/user/login');
var homeAdminRouter = require('./components/admin/home');
var staffAdminRouter = require('./components/admin/staff');
var sellAdminRouter = require('./components/admin/sell');
var orderAdminRouter = require('./components/admin/order');
var productAdminRouter = require('./components/admin/product');
var revenueAdminRouter = require('./components/admin/revenue');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeUserRouter);
app.use('/product-user', productUserRouter);
app.use('/categories-user', categoriesUserRouter);
app.use('/checkout-user', checkoutUserRouter);
app.use('/login-user', loginUserRouter);
app.use('/home-admin', homeAdminRouter);
app.use('/staff-admin', staffAdminRouter);
app.use('/sell-admin', sellAdminRouter);

app.use('/order-admin', orderAdminRouter);
app.use('/product-admin', productAdminRouter);
app.use('/revenue-admin', revenueAdminRouter);

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
