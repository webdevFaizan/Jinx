const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    }
    ,
    postOwnerId : {            //The postSchema need to be referred to a real time user, this is we are linking it to the userSchema.
        type : mongoose.Schema.Types.ObjectId,      //This is the data type that is being stored in it. I think this would be reference to this type.
        ref : 'User'        //I got an error when I used 'user' it should be 'User' as 'User' is being exported from the DB, and User will be of.
        // required : true
    },
    postOwnerName : {       //I am not deleting this field, but storing the postOwnerName is not good practice. This will only store the Owner name at the time of post creation, but when the user updates his profile with his new name, this will still be there. This is why it is prefereabble to use the postOwnerId.name as the best practice. Instead when we use the postOwnerId to populate the data, then we could have instead used the postOwnerId.name instead as it will consist of updated name.
        type : String,
        required : true
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
},{
    timestamps : true
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;