var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var id = req.query.id;
	console.log("[검색] ",id,"의 검색요청이 들어왔습니다.");
	res.render('iteminfo', { title: 'Express', id: id, method: "get" });
});

module.exports = router;