require('dotenv').config();
const nodemailer = require('nodemailer');
const app = require('../../server')
const { generateMailTransport, generateMailMessage } = require('../../helpers')
const transporter = generateMailTransport()
const message = generateMailMessage('dallin.r.parker@gmail.com', 'Vestid Support', `Vestid Password Reset`, 'WORKING!')


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