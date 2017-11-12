require('dotenv').config();
const nodemailer = require('nodemailer');
const app = require('../../server')
const { generateMailTransport, generateMailMessage } = require('../../helpers')
const transporter = generateMailTransport()
const message = generateMailMessage('dallin.r.parker@gmail.com', 'Vestid Support', `Vestid Password Reset`, 'WORKING!')
console.log('message: ', message);
// let transporter = nodemailer.createTransport({
// 	service: 'Gmail',
// 	secure: true,
// 	auth: {
// 		user: process.env.MAILER_USER,
// 		pass: process.env.MAILER_PASS
// 	}
// });

// let message = {
// 	from: 'Vestid Support',
// 	to: 'dallin.r.parker@gmail.com',
// 	subject: `Vestid Password Reset`,
// 	text: 'ITS WORKING!!!!'
// }

exports.defaultMail = (req, res, next) => {
	const { user } = req.session;
	transporter.sendMail(message, (error, info) => {
		if (error) {
			console.log(error)
		}
		console.log("working: ", info)
		//todo: send back confirmation about account set up.
	})
};