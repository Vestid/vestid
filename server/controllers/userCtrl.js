const app = require('../server');
const db = app.get('db');


exports.registerUser = (req, res, next) => {
	console.log(req.app.get('db'))
}