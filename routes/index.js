var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let d = new Date();
  let curDate = d.getFullYear() + "/" + ( d.getMonth() + 1 ) + "/" + d.getDate();
  let curTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  const nowip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("[", curDate, curTime, "] 유저가 접속하였습니다. (", nowip, ")");
  res.render('index', { title: 'Express' });
});

router.get('/summary', function(req, res, next) {
  res.render('summary', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;