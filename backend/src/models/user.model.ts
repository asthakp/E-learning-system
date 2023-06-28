import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    user:{
        type:String,
        enum:['student', 'instructor', 'admin'],
        default:'student'
    },
    jwt:{
        type:String,
    },
    fcm:{
        type:String
    }
})

const User=mongoose.model('User',userSchema)

export default User