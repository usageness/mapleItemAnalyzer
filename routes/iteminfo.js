var express = require('express');
var router = express.Router();

/* GET users listing. */
/* this directory start with /iteminfo */
router.get('/', function(req, res, next) {
	var id = req.query.id;
	var subject;
	if (id != "") {
		subject = id + " 분석중";
	}
	else {
		subject = "메이플 추가옵션 분석기";
	}
	console.log("[검색] ",id,"의 검색요청이 들어왔습니다.");
	res.render('iteminfo', { title: 'Express', id: subject, method: "get" });
});

module.exports = router;