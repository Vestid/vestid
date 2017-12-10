require('dotenv').config()
const { SENDGRID_API } = process.env;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(`${SENDGRID_API}`);

exports.resetPassword = (req, res, next) => {
    const msg = {
        to: 'dallin.r.parker@gmail.com',
        from: 'vestid.email@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sendgrid.send(msg);
}
