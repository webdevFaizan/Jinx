module.exports.home=function(req,res){
    res.cookie("user_id" , 3465);
    console.log(req.cookies);
    return res.render('home',{
        title : 'Kratos'
    });
};