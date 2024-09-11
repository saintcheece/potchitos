const express = require('express');
const flash = require('express-flash');

const session = require('./session');

const path = require('path'); //path reader
const bodyParser = require('body-parser'); //input reader

const mongoConnect = require('./util/database');

const site = express();

site.use(session);
site.use(flash());
site.use(bodyParser.urlencoded({extended: false}));

site.set('view engine', 'ejs'); //set ejs
site.set('views', 'views'); //set views folder

//ROUTES
////import route and handle requests
////default page must be at the end
const log = require('./routes/log'); 
const about = require('./routes/about');
const booths = require('./routes/booths');
const cart = require('./routes/cart');
const contacts = require('./routes/contacts');
const custom_cakes = require('./routes/custom_cakes');
const product_details = require('./routes/product_details');
const products = require('./routes/products');
const home = require('./routes/home');

const admin = require('./routes/admin');

site.use(express.static(path.join(__dirname, 'public'))); //public folder can be accessed by server without route handling

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
site.use(log.routes);
site.use(about);
site.use(booths);
site.use(cart);
site.use(contacts);
site.use(custom_cakes);
site.use(product_details);
site.use(products);
site.use(home);

//404 PAGE
site.use((req, res)=>{
    res.status(404).render('404');
});

// mongoConnect(client => {
//   console.log(client);
  site.listen(3000);
// })