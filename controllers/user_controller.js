module.exports.user=function(req,res){
    // return res.send('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title : 'Kratos'
    });
};

module.exports.data=function(req,res){
    // return res.send('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title : 'Thanos'
    });
};