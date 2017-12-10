const app = require('../server');

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
