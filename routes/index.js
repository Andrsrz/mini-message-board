var express = require('express');
var router = express.Router();
var moment = require('moment');

const messages = [
	{
		text: "Hi, there!",
		user: "Andres",
		added: moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")
	},
	{
		text: "Hello, Express!",
		user: "Arturo",
		added: moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")
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
		messages.push({
			text: req.body.message,
			user: req.body.user,
			added: moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")
		});
		res.redirect('/');
});

module.exports = router;
