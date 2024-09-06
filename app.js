const express = require('express');

const path = require('path'); //path reader
const bodyParser = require('body-parser'); //input reader

const site = express();

site.set('view engine', 'ejs'); //set ejs
site.set('views', 'views'); //set views folder

//ROUTES
////import route and handle requests
////default page must be at the end
const log = require('./routes/log'); 
const home = require('./routes/home');

// site.use(express.static(path.join(dirname, 'public'))); //public folder can be accessed by server without route handling

//ROUTE HANDLING
////route to logPage (takes first parameter(link) then sends the second(route))
////default page must be at the end
site.use('/log', log);
site.use(home);

//404 PAGE
site.use((req, res)=>{
    res.status(404).render('404');
});

site.listen(3000);