var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('list_orders', { title: 'List orders' });
});

module.exports = router;
