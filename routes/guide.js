var express = require('express');
var router = express.Router();

/* GET home page. */
/* this directory start with /guide */
router.get('/', function(req, res, next) {
  console.log("[정보] guide page 접속");
  res.render('guide', { title: 'Express' });
});

router.get('/item', function(req, res, next) {
  res.render('guide_item', { title: 'Express' });
});

router.get('/picker', function(req, res, next) {
  res.render('guide_picker', { title: 'Express' });
});

module.exports = router;