require('dotenv').config()
const { SENDGRID_API } = process.env;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(`${SENDGRID_API}`);

exports.sendReset = (req, res, next) => {
    const { email } = req.body
    const url = 'dallinparker.me'
    const msg = {
        to: email,
        from: 'vestid.email@gmail.com',
        subject: 'Vestid Support: Password Reset Request',
        text: 'hi dallin, you are getting this email because you have requested to reset your password by clicking: dallinparker.me',
        html: `<strong>hi dallin, you're getting this email because you've requested to reset your password by clicking: ${url}</stong>`,
    };
    sendgrid.send(msg);
};