var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('edit_product', { title: 'Edit product' });
});

module.exports = router;
