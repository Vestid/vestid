require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const massive = require('massive');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

// INITIATE EXPRESS APP & SET LISTENING PORT ================
const app = module.exports = express();
app.set('port', process.env.PORT || 3000);

// MIDDLEWARE FOR EVERYTHING TO PASS THROUGH ================
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));
app.use(cors());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: false,
//     resave: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());




// LISTENING ON PORT ===============================
app.listen(app.get('port'), () => {
    console.log('Vestid App running on port', app.get('port'));
});