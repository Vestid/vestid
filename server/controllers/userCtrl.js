const app = require('../server');
const bcrypt = require('bcryptjs');


hashPW = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

exports.registerUser = (req, res, next) => {
	console.log(req.body)
	//const db = app.get('db');
	//const { firstname, lastname, email, password } = req.body
	//const pw = hashPW(password)
	//db.register_user([firstname, lastname, email, pw]).then(response => {
	//	//const {}
	//	if(!user) return res.status(404).send("User Not Found")
	//
	//	console.log(response)
	//})
}

exports.successUser = (req, res, next) => {
	console.log("Success: ", req)
	const {user} = req;
	if(!user) return res.status(401).send("User Not Found")
	delete user[0].password
	console.log("pwremoved: ", user)
	return res.status(200).send(user)
}