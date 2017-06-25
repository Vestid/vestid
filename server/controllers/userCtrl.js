const app = require('../server');
const bcrypt = require('bcryptjs');


hashPW = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

exports.registerUser = (req, res, next) => {
	const db = app.get('db');
	const { firstname, lastname, email, password } = req.body
	const pw = hashPW(password)

	db.check_by_email([email]).then(user => {
		console.log("Check: ", user)
		console.log("Length: ", user.length)
		if(user.length > 1) {
			console.log("Exists: ", user)
				return res.status(200).send("Email already in Use")
		} else {
			db.register_user([firstname, lastname, email, pw]).then(user => {
				console.log("Created: ", user)
				if (!user) return res.status(404).send("User Not Found")
				return res.status(200).send('Account Created')
			})
		}
	})
}

exports.successUser = (req, res, next) => {
	const {user} = req;
	if(!user) return res.status(401).send("User Not Found")
	delete user[0].password
	delete user[0].email
	return res.status(200).send(user)
}