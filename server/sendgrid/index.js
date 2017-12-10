require('dotenv').config()
const { SENDGRID_API } = process.env;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(`${SENDGRID_API}`);

exports.sendReset = (req, res, next) => {
    //TODO: CREATE HELPER FUNCTION FOR MAKING THIS CLEANER
    const { id, firstname, lastname, email } = req.body.confirmed[0]
    console.log('email: ', email)
    console.log('first: ', firstname, 'lastname: ', lastname);
    console.log('id: ', id);
    const url = 'dallinparker.me'
    const msg = {
        to: 'dallin.r.parker@gmail.com',
        from: 'vestid.email@gmail.com',
        subject: 'Vestid Support: Password Reset Request',
        text:`hi ${firstname}, you are getting this email because you have requested to reset your password by clicking: dallinparker.me`,
        html: `<strong>hi ${firstname}, you're getting this email because you've requested to reset your password by clicking: ${url}</stong>`,
    };
    sendgrid.send(msg);
};