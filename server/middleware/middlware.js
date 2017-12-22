const app = require('../server');
const bcrypt = require('bcryptjs');
const isPast = require('date-fns/is_past')

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

exports.mashName = (first, last) => {
    let splitF = first.split('')
    let splitL = last.split('')
    let combine = [...splitF, ...splitL]
    let upper = combine.map((e,i,a) => (i % 2 === 0) ? e.toUpperCase() : a.splice(i, 0))
    return upper.reverse().join('')
}

exports.generateToken = mashed => {
    let salt = bcrypt.genSaltSync(15)
    return bcrypt.hashSync(mashed, salt)
}

exports.hasTokenExpired = date => (isPast(date))

exports.updateUserToken = (req, res, next) => {
    const { id, firstname, lastname } = req.body.confirmed[0]

    const mashed = exports.mashName(firstname, lastname)
    const tokenKey = exports.generateToken(mashed)
    const expiration = new Date()

    app.get('db').update_user_token([tokenKey, expiration, id]).then(updated => {
        (updated[0].tokenkey) ? delete updated[0].password : res.status(404).send('Reset password failed')
        req.body.mashed = { mashed }
        next()
    })

}