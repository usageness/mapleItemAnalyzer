var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("[정보] 유저가 접속하였습니다.");
  res.render('index', { title: 'Express' });
});

router.get('/summary', function(req, res, next) {
  res.render('summary', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;