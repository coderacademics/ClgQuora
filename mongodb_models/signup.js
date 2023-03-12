import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSignupSchema = new Schema({
  username:{
    type : String,
    require : true,
    unique : true
  },
  userEmailAddress:{
    type: String,
    require : true,
    unique : true
  },
  password:{
    type:String,
    require: true,
  }
});

module.exports=mongoose.model('UserSignup',userSignupSchema);