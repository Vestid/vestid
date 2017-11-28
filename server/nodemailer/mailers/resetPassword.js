require('dotenv').config();
const nodemailer = require('nodemailer');
const { generateMailTransport, generateMailMessage } = require('../../helpers')
const transporter = generateMailTransport();

exports.sendReset = (req, res, next) => {
    const { id, firstname, lastname, email } = req.body.confirmed[0]
    const url = `www.dallinparker.me`
    const subj = `Vestid Password Reset`;
    const from = 'Vestid Support';
    const resetMessage = `hi ${firstname}, you're getting this email because you've requested to reset your password by clicking: ${url}`
    const message = generateMailMessage('dallin.r.parker@gmail.com', from, subj, resetMessage)
    transporter.sendMail(message, (error, info) => {
        (error) ? console.log('error: ', error) : console.log('working: ', info);
    })
}