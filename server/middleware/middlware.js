const app = require('../server');
const isPast = require('date-fns/is_past')
const random = require('rand-token')

exports.checkAuthed = (req, res, next) => {
	return (!req.isAuthenticated()) ? res.status(401).send("Unauthorized") : next()
};

exports.checkEmail = (req, res, next) => {
    const { email } = req.body;
    app.get('db').check_by_email([email]).then(exists => {
        (exists.length > 0) ? delete exists[0].password : res.status(404).send('Not finding that email');
        req.body.confirmed = exists;
        next()
    })
}

exports.hasTokenExpired = date => (isPast(date))

exports.updateUserToken = (req, res, next) => {
    const { id } = req.body.confirmed[0]
    const token = random.generate(25)
    const expiration = new Date()

    app.get('db').update_user_token([token, expiration, id]).then(updated => {
        (updated[0].tokenkey) ? delete updated[0].password : res.status(404).send('Reset password failed')
        req.body.token = { token }
        next()
    })
}

exports.checkToken = (req, res, next) => {
    const { token } = req.params

}