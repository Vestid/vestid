require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const project_name = 'Vestid'

// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 3000);

// PASSPORT STRATEGY ===================================
const passport = require('./controllers/passport');

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// MASSIVE DB ==========================================
const massiveUri = process.env.DATABASE_URL;
const massiveServer = massive.connectSync({
  connectionString: massiveUri
});

app.set('db', massiveServer);
const db = app.get('db');


// AUTH POLICY ================================
const isAuthed = (req, res, next) => {
  if(!req.isAuthenticated()) return res.status(401).send();
  return next()
};







// LISTENING ON PORT ===============================
app.listen(app.get('port'), () => {
    console.log(`${project_name} is running on`, app.get('port'));
});
