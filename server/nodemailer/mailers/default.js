require('dotenv').config();
const nodemailer = require('nodemailer');
const app = require('../../server');

let transporter = nodemailer.createTransport({
	service: 'Gmail',
	secure: true,
	auth: {
		user: process.env.MAILER_USER,
		pass: process.env.MAILER_PASS
	}
});

let message = {
	from: 'Vestid <support@vestid.com>',
	to: 'dallin.r.parker@gmail.com',
	subject: `Vestid Password Reset`,
	text: 'ITS WORKING!!!!'
}

exports.defaultMail = (req, res, next) => {
	const { user } = req.session;
	transporter.sendMail(message, (error, info) => {
		if (error) {
			console.log(error)
		}
		console.log("working: ", info)
	})
};