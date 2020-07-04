var express = require('express');
var router = express.Router();

const messages = [
	{
		text: "Hi, there!",
		user: "Andres",
		added: new Date()
	},
	{
		text: "Hello, Express!",
		user: "Charles",
		added: new Date()
	}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages',
						messages: messages });
});

module.exports = router;
