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
router.get('/', (req, res, next) => {
	 res.render('index', { title: 'Message Board',
						   messages: messages });
});

/* POST to new messages */
router.get('/new', (req, res, next) => {
	res.render('message_form', { title: 'New Message' });
});

module.exports = router;
