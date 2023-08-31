const mongoose = require('mongoose')


const TweetSchema =  new mongoose.Schema({

    body: {
        type: String,
        required: true,
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    media:{
        type: String,
        default:''
},
    likes:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],

    retweets:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],
comments: [
    {
        body:{type:String}, 
        user:{type: mongoose.Schema.Types.ObjectId ,   ref:'User'} , 
      }
],
    date: {
        type: Date,
        default: Date.now
    }
})

      

        // static method for Registration
        TweetSchema.statics.newTweet = async function(user,body, media){
    //validation
    if( !body ){
        throw Error('Text Field Should Not Be Empty')
    }
    const tweet = await this.create({user,body, media})
    return tweet
}  

//static method for fetching all tweets for db
TweetSchema.statics.allTweets = async function(){
    
    const tweets = await this.find()
    .populate('user')
    .sort({date: -1})
    return tweets
}  



// statict method for likes
TweetSchema.statics.allLikes = async function(_id ,user){
    const likedTweet = await this.findById({_id})
    const likes = await this.findByIdAndUpdate(likedTweet._id , {
        $push:{likes:user}
    }, {new:true})
    return likes
}
// statict method for likes
TweetSchema.statics.UnLikes = async function(_id,user){
    const unlikedTweet = await this.findById({_id})
    const unlikes = this.findByIdAndUpdate(unlikedTweet._id , {
        $pull:{likes:user}
    }, {new:true})
    return unlikes
}

// statict method for retweets
TweetSchema.statics.allRetweets = async function(_id ,user){
    const retweetedTweet = await this.findById({_id})
    const retweets = await this.findByIdAndUpdate(retweetedTweet._id , {
        $push:{retweets:user}
    }, {new:true})
    return retweets
}

// statict method for unretweets
TweetSchema.statics.unRetweets = async function(_id ,user){
    const unretweetedTweet = await this.findById({_id})
    const unretweets = await this.findByIdAndUpdate(unretweetedTweet._id , {
        $pull:{retweets:user}
    }, {new:true})
    return unretweets
}

// statict method for comments
TweetSchema.statics.addComment = async function(_id , body, user){
   
    const tweet = await this.findById(_id)
    console.log(tweet)
     const comment = {body:body,user:user}
    const commentData = await this.findByIdAndUpdate(tweet._id , {
        $push:{comments:comment}
    }, {new:true})
    .populate("comments.user" , "_id , name")
    return commentData
}



module.exports = mongoose.model('Tweet',TweetSchema )