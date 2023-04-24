var express = require('express');
// var auth = require('auth'); 
var router = express.Router();
/* GET users listing. */

// let accounts = await web3.eth.getAccounts();
// let userAddress = accounts[0];

router.get('/dashboard',  function(req, res, next) {
    // res.render('dashboard.ejs',{email:req.session.emailAddress})
    
    if(req.session.loggedinUser){
        // const Web3 = require('web3');
        // const web3 = new Web3(Web3.givenProvider);
        res.render('dashboard.ejs',{email:req.session.emailAddress})
    }else{
        res.redirect('/login');
    }
});
module.exports = router;