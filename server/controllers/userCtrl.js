const app = require('../server');
const bcrypt = require('bcryptjs');


hashPW = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

exports.registerUser = (req, res, next) => {
	console.log("Reg User: ",req.body)
	const db = app.get('db');
	const { firstname, lastname, email, password } = req.body
	const pw = hashPW(password)
	db.register_user([firstname, lastname, email, pw]).then(user => {
		if(!user) return res.status(404).send("User Not Found")
		console.log("User found: ",user)
	})
}

exports.successUser = (req, res, next) => {
	const {user} = req;
	if(!user) return res.status(401).send("User Not Found")
	delete user[0].password
	delete user[0].email
	return res.status(200).send(user)
}