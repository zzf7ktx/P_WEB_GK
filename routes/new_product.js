var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new_product', { title: 'New product' });
});

module.exports = router;
