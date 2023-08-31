const express = require('express')
const router = express.Router()
const User = require('../models/User') //User Model
const jwt = require('jsonwebtoken')

//Toekn
const createToken = (_id) =>{
return jwt.sign({_id}, process.env.SECRET, {expiresIn:'2d'})
}

router.post('/signupVerification',async (req, res)=>{
    const {name, email, password, dateOfBirth} = req.body
    try {
        const user = await User.signupVerification(name, email,dateOfBirth, password)

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }

})


router.post('/register',async (req, res)=>{
    const {name, email, password, dateOfBirth} = req.body
    try {
        const user = await User.signup(name, email,dateOfBirth, password)
        //token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json(error.message)
    }

})


//loggin
    router.post('/login', async (req, res)=>{
        const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        //token
        const token = createToken(user._id)
        const id = user._id
        const name = user.name
        const dateOfBirth = user.dateOfBirth
        const status = user.status
        const userImage = user.userImage
        const followers = user.followers
        const following = user.following
        const bio = user.bio
        const location = user.location
        const website = user.website
        const date = user.date

        res.status(200).json({ id , name, email, dateOfBirth, status, userImage, followers, following, date, bio, location, website})
    } catch (error) {
        res.status(400).json(error.message)
    }
    })

  //edit user info
  router.put('/edituser/:id',async (req, res)=>{
    try {
        const Updateduser = await User.findByIdAndUpdate(req.params.id , {$set: req.body}, {new: true})
   
        res.status(200).json(Updateduser)
    } catch (error) {
        res.status(400).json(error.message)
    }

})


 //fetching a post using post ID
 router.get('/userprofile/:id', async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
 })

 //follow
  router.put('/userFollow' , async(req, res)=>{
    const {id , user} = req.body
   try {
    const userToBeFollowed = await User.findById(id)
     const userToFollow = await User.findById(user)
    const followData = await User.findByIdAndUpdate(userToBeFollowed._id , {
        $push:{followers:userToFollow}
    }, {new:true})
    res.status(200).json(followData)
   } catch (error) {
    
   }
 })
  //unfollow
  router.put('/userUnFollow' , async(req, res)=>{
    const {id , user} = req.body
   try {
    const userToBeFollowed = await User.findById(id)
     const userToFollow = await User.findById(user)
    const followData = await User.findByIdAndUpdate(userToBeFollowed._id , {
        $pull:{followers:userToFollow}
    }, {new:true})
    res.status(200).json(followData)
   } catch (error) {
    
   }
 })


 //fetching users
 router.get('/users', async (req, res)=>{
    try {
        const users = await User.find()
        .limit(4)
        .sort({date: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error.message)
    }
 })
    

module.exports = router