const User = require('../models/user');
const alert= require('alert');

module.exports.signup=function(req,res){
    return res.render('signUp',{
        title : 'User Sign up Page'
    });
};

module.exports.signupadd=function(req,res){    
    if(req.body.password!=req.body.confirmpassword){
        return res.redirect('/signup');
    }

    User.findOne({email : req.body.email}, function(err,user){
        if(err){console.log(err);return;}

        if(!user){
            User.create(req.body,function(err,task){
                if(err){console.log(err);return;}
                console.log(task);
                return res.redirect('/signin');
            });
        }
        else {
            console.log("User already exists");
            return res.redirect('/signup');
        }
    });
};


module.exports.signin=function(req,res){
    return res.render('signIn',{
        title : 'User Sign up Page'
    });    
};

module.exports.signincheck=function(req,res){
    return res.render('signIn');
};