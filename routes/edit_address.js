var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('edit_address', { title: 'Express' });
});

module.exports = router;
