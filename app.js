const express = require('express');
const flash = require('express-flash');

const sess = require('./session');

const path = require('path'); //path reader
const bodyParser = require('body-parser'); //input reader

const site = express();

site.use(sess);
site.use(flash());
site.use(bodyParser.urlencoded({extended: false}));

site.set('view engine', 'ejs'); //set ejs
site.set('views', 'views'); //set views folder

//ROUTES
////import route and handle requests
////default page must be at the end
const log = require('./routes/log'); 
const home = require('./routes/home');

// site.use(express.static(path.join(dirname, 'public'))); //public folder can be accessed by server without route handling

site.use((req, res, next) => {
    if (req.flash('info')) {
      res.locals.info = req.flash('info');
      req.flash('info', null); // clear the flash message
    }
    next();
});


//ROUTE HANDLING
////route to logPage (takes first parameter(link) then sends the second(route))
////default page must be at the end
site.use(log.routes); //remember to add .routes
site.use(home);

//404 PAGE
site.use((req, res)=>{
    res.status(404).render('404');
});

site.listen(3000);