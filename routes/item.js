var express = require('express');
var router = express.Router();

/* GET users listing. */
/* this directory start with /item */
router.get('/', function(req, res, next) {
	var id = req.query.id;
	var subject;
	if (id != "") {
		subject = id + " 상세정보";
	}
	else {
		subject = "메이플 추가옵션 분석기";
	}
	console.log("[정보] ",id,"의 정보요청이 들어왔습니다.");
	res.render('item', { title: 'Express', id: subject, method: "get" });
});

module.exports = router;