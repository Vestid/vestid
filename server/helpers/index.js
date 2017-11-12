// export const token = 'this$#nv#$unasd';
const nodemailer = require('nodemailer');


exports.generateMailTransport = () => {
    return nodemailer.createTransport({
        service: 'Gmail',
        secure: true,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS
        }
    });
}

exports.generateMailMessage = (to, from, subj, message) => ({
    from: from,
    to: to,
    subject: subj,
    text: message
})
