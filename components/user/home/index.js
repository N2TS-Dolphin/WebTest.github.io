var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/home/index', {layout: 'user/layout.hbs'});
});

module.exports = router;
