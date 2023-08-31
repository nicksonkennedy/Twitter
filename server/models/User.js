const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema =  new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: String,
        default:""
    },
    password: {
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
       default: "Edit Bio #Twitter"
    },
    location: {
        type: String,
       default: "Add location"
    },
    website: {
        type: String,
       default: ""
    },
    userImage:{
        type: String,
        default:""
},
followers:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],
following:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],
    date: {
        type: Date,
        default: Date.now
    }
})

      // static method for Signup verification
      userSchema.statics.signupVerification = async function(name,email,dateOfBirth, password){
        //validation
        if( !name || !email || !dateOfBirth ||  !password ){
            throw Error('All Fields Are Required')
        }
    
        if(!validator.isEmail(email)){
            throw Error('Email Is Not Valid')
        }
       
        const nameExists = await this.findOne({name})
        if(nameExists){
            throw Error('Name Already Exists')
        }
    
        const emailExists = await this.findOne({email})
        if(emailExists){
            throw Error('Email Already Exists')
        }
        
       const user = {name, email, dateOfBirth , password}
       return user
    }

        // static method for Registration
userSchema.statics.signup = async function(name,email,dateOfBirth, password){
    //validation
    if( !name || !email || !dateOfBirth ||  !password ){
        throw Error('All Fields Are Required')
    }

    if(!validator.isEmail(email)){
        throw Error('Email Is Not Valid')
    }
   
    const nameExists = await this.findOne({name})
    if(nameExists){
        throw Error('Name Already Exists')
    }

    const emailExists = await this.findOne({email})
    if(emailExists){
        throw Error('Email Already Exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = this.create({name,email,dateOfBirth, password:hash})
    return user
}  





// static login method
userSchema.statics.login = async function(email, password){
     //validation
     if(!email || !password){
        throw Error('All Fields Are Required')
    }

    const user = await this.findOne({email})
   
    if(!user){
        throw Error('Email Does Not Exist')
    }
   

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Wrong Password')
    }
    return user
}

     // static method for profile editing
     userSchema.statics.editUser = async function(_id, name,bio, location, website, userImage ){
        const user = await this.findById(_id)
        const updatedUser = await this.findByIdAndUpdate(user._id, {name,bio, location, website, userImage})
        console.log(updatedUser)
        return updatedUser
    } 

    //statict emthod for followers

    userSchema.statics.userFollow = async function(_id){
    const followedUser = await this.findById({_id})
    const User = await this.findById(_id)
    const data = await this.findByIdAndUpdate(followedUser._id , {
        $push:{followers:User._id}
    }, {new:true})
    return data
}

  
module.exports = mongoose.model('User',userSchema )