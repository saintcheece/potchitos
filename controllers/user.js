exports.getUserLog = (req, res) => {
    res.render('log');
};

exports.postUserLog = (req, res) => {
    if(req.body.inptEmail == 'rees' && req.body.inptPass == 'pass1'){
        // PASSABLE DATA
        req.session.user = {
            email: req.body.inptEmail,
            username: "Reece"
          };
        res.redirect('/');
    }else{
        // create a session to flash a message back to log in
        req.flash('log_response', 'Invalid Email or Password');
        res.render('log', { info: req.flash('log_response') });
    }
}