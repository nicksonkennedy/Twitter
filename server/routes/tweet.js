const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweet') //User Model


router.post('/newTweet',async (req, res)=>{
    const {user,body, media} = req.body
    try {
        const tweet = await Tweet.newTweet(user,body, media)
        //token
        console.log(tweet.user)
        res.status(200).json(tweet)
    } catch (error) {
        res.status(400).json(error.message)
    }

})
 router.get('/allTweets', async (req, res)=>{
    try {
        const allTweets = await Tweet.allTweets()
        res.status(200).json(allTweets)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })

 //fetching specific tweet using params 
  //fetching a post using post ID
  router.get('/tweet/:id', async(req, res)=>{
    try {
        const tweet = await Tweet.findById(req.params.id)
        .populate('user')
        .populate("comments.user" , "_id name userImage").sort({date: -1})
        res.status(200).json(tweet)
    } catch (error) {
        res.status(500).json(error)
    }
 })

 

 //likes
 router.put('/likes' , async(req, res)=>{
    const {id , user} = req.body
    try {
        const likes = await Tweet.allLikes(id, user)
        res.status(200).json(likes)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })

  //likes
   router.put('/unlikes' , async(req, res)=>{
    const {id , user} = req.body
    try {
        const likes = await Tweet.UnLikes(id, user)
        res.status(200).json(likes)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })

//reweets
router.put('/retweets' , async(req, res)=>{
    const {id , user} = req.body
    try {
        const retweets = await Tweet.allRetweets(id, user)
        res.status(200).json(retweets)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })

 //unreweets
router.put('/unretweets' , async(req, res)=>{
    const {id , user} = req.body
    try {
        const unretweets = await Tweet.unRetweets(id, user)
        res.status(200).json(unretweets)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })


  //add comment
  router.put('/addComment' , async(req, res)=>{
    const {_id , body, user} = req.body
   try {
    const tweet = await Tweet.findById(_id)
     const comment = {body:body,user:user}
    const commentData = await Tweet.findByIdAndUpdate(tweet._id , {
        $push:{comments:comment}
    }, {new:true})
    .populate("comments.user" , "_id name userImage")
    console.log(commentData)
    res.status(200).json(commentData)
   } catch (error) {
    
   }
 })

 // delete tweet
 router.post('/removeTweet/:id' , async(req, res)=>{
    try {
        await Tweet.findByIdAndRemove(req.params.id)
        res.status(200).json('Tweet Deleted')
    } catch (error) {
        res.status(400).json(error)
    }
 })

 
 

module.exports = router