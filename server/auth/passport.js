const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//const app = require('../server');
//const db = app.get('db');

const verifyPW = (submittedPW, userPW) => {
  return bcrypt.compareSync(submittedPW, userPW);
};

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    console.log(email, password);
    db.user_search_email([email], (err, user) => {
        user = user[0];
        if(err) done(err);
        if(!user) return done(null, false);
        if(verifyPW(password, user.password)) return done(null, user);
        return done(null, false);
    });
}));

passport.serializeUser((user, done) =>{
  console.log('Serializing User', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('Deserializing User', id);
});

module.exports = passport;