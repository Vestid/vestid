require('dotenv').config()
const { SENDGRID_API } = process.env;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(`${SENDGRID_API}`);

exports.sendReset = (req, res, next) => {
    //TODO: CREATE HELPER FUNCTION FOR MAKING THIS CLEANER && Create frontend url for reset input
    //TODO: generate token for URL
    const { id, firstname, lastname, email } = req.body.confirmed[0]
    console.log('id: ', id)
    console.log('first: ', firstname)
    console.log('lastname: ', lastname)
    console.log('email: ', email)
    // const url = 'vestid.co/reset/approved/'
    const url = 'dallinparker.me'
    const msg = {
        to: email,
        from: 'vestid.email@gmail.com',
        subject: 'Vestid Support: Password Reset Request',
        text:`Hi ${firstname}, you are getting this email because you have requested to reset your password by clicking: dallinparker.me`,
        html: `<strong>Hi ${firstname}, you're getting this email because you've requested to reset your password by clicking: ${url}</stong>`,
    };
    sendgrid.send(msg);
};