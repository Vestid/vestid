require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
const project_name = 'Vestid'


// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 3000);

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));
app.use(cors());

// PASSPORT STRATEGY ===================================
const passport = require('./auth/passport');

// MASSIVE DB ==========================================
massive(process.env.ESQL_DB).then(db => {
  app.set('db', db)
}).catch((err) => {
	console.log(err)
})
// EXPRESS SESSIONS =====================================
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// SERVER CONTROLLERS ======================
const { registerUser } = require('./controllers/userCtrl');
const { defaultMail } = require('./nodemailer/mailers/default');

// LOCAL AUTH ENDPOINTS =========================
app.post('/api/login', passport.authenticate('local', {
	successRedirect: '/'
}));

app.get('/api/defaultmail', defaultMail)
app.post('/api/register', registerUser)
// LISTENING ON PORT ===============================
app.listen(app.get('port'), () => {
    console.log(`${project_name} is running on`, app.get('port'));
});
