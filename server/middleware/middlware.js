

exports.checkAuthed = (req, res, next) => {
	if(!req.isAuthenticated()) return res.status(401).send("Unauthorized")
	return next()
};

exports.checkSession = (req, res, next) => {
	console.log(req.session.user)
}