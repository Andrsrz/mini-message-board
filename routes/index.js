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

/* POST home page. */
router.post('/', (req, res, next) => {
	res.redirect('/new');
});

/* GET to new messages */
router.get('/new', (req, res, next) => {
	res.render('message_form', { title: 'New Message' });
});

/* POST to new messages */
router.post('/new', (req, res, next) => {
	 messages.push({text: req.body.message, user: req.body.user, added: new Date()});
	res.redirect('/');
});

module.exports = router;
