const app = require('../server');
const bcrypt = require('bcryptjs');

exports.checkAuthed = (req, res, next) => {
	if(!req.isAuthenticated()) return res.status(401).send("Unauthorized")
	return next()
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
    return upper.join('')
}

exports.generateToken = mashed => {
    let salt = bcrypt.genSaltSync(15)
    return bcrypt.hashSync(mashed, salt)
}