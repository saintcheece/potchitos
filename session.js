const session = require('express-session');

//RANDOM SECRET KEY GENERATOR
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

const sessionConfig = {
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000 // 1 hour
    }
};

const sessionMiddleware = session(sessionConfig);

//To assign a value to it:
// req.session.user = {email: 'email@example.com', username: 'username'};

//To read from it:
// const user = req.session.user;

module.exports = sessionMiddleware;