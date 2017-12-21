require('dotenv').config()
const { SENDGRID_API, SENDGRID_EMAIL } = process.env;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(`${SENDGRID_API}`);
const { generateToken, mashName } = require('../middleware/middlware')

exports.sendReset = (req, res, next) => {
    const { id, firstname, lastname, email } = req.body.confirmed[0]
    const { hostname } = req
    const mashed = mashName(firstname, lastname)
    const token = generateToken(mashed)
    console.log('token: ', token)
    //todo: put token and expiration into DB
    //todo: generate expiration time stamp
    //todo: make the url in email clickable
    // const url = 'vestid.co/reset/approved/'
    const url = `${hostname}:3000/api/reset-approved/${mashed}`
    const msg = {
        to: email,
        from: SENDGRID_EMAIL,
        subject: 'Vestid Support: Password Reset Request',
        text:`Hi ${firstname}, you are getting this email because you have requested to reset your password by clicking: ${url}`,
        html: `<strong>Hi ${firstname}, <br> you're getting this email because you've requested to reset your password by clicking: ${url}</stong>`,
    };
    sendgrid.send(msg);
};