var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var id = req.query.id;
	console.log("[정보] ",id,"의 정보요청이 들어왔습니다.");
	res.render('item', { title: 'Express', id: id, method: "get" });
});

module.exports = router;