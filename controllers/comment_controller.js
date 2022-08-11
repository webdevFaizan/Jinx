const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.comment = function (req,res){
    Post.findById(req.body.postId, function(err, post){     //Since there would be a lot of posts that would be in the db, so we first need to find it by the postId and then we need to push the comment that we have newly created into the comments array.
        if(err){console.log(err);return;}    
        if(post){
            Comment.create({
                content : req.body.comment,
                user : req.user._id,        //We need to keep the userId that posted the comment.
                post : req.body.postId      //We need to keep track of postId on which the comment has been made.
            },function(err,comment){
                if(err){console.log(err);return;}    
                    post.comments.push(comment);
                    post.save();            //Whenever we are updating any thing, we need to save it. This method tells the database that for now this is the final version, and we need to block it.
                return res.redirect('/');
            });
        }
    });    
};



module.exports.deleteComment = function (req,res){
    //We are sending the params, and in those params we will
    Comment.findById(req.params.commentId,function(err, comment){
        if(err){console.log(err);return;}
        if(comment.user == req.user.id){
            const postId=comment.post;
            comment.remove();       //This will remove the comment object that is received as Id reference. By simply backtracking.
            Post.findByIdAndUpdate(postId, {$pull : {comments :req.params.commentId}}, function(err, post){
                //We also have to delete the comment reference in the post, and this is not a mongoose method, this is simple and plain mongo method that will only delete the reference from the commetns array in the post object.
                if(err){console.log(err);return;}    
                console.log('Comments deleted');
                return res.redirect('/');
            });
        }
        else{
            return res.redirect('/');
        }
    });
};