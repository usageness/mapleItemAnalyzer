var express = require('express');
var router = express.Router();

/* GET home page. */
/* this directory start with /guide */
router.get('/', function(req, res, next) {let d = new Date();
  let curDate = d.getFullYear() + "/" + ( d.getMonth() + 1 ) + "/" + d.getDate();
  let curTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  const nowip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("[" + curDate + curTime + "] 가이드 페이지 접속하였습니다. (", nowip, ")");
  res.render('guide', { title: 'Express' });
});

router.get('/item', function(req, res, next) {
  res.render('guide_item', { title: 'Express' });
});

router.get('/picker', function(req, res, next) {
  res.render('guide_picker', { title: 'Express' });
});

module.exports = router;