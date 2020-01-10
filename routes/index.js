var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/item', function(req, res, next) {
  res.render('item', { title: 'Express' });
});

router.get('/summary', function(req, res, next) {
  res.render('summary', { title: 'Express' });
});

router.get('/guide', function(req, res, next) {
  res.render('guide', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
module.exports = router;
