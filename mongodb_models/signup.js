const  mongoose =require('mongoose')
mongoose.set('strictQuery',true)
const { Schema } = mongoose;

const userSignupSchema = new Schema({
  username:{
    type : String,
    require : true,
    unique:false
  },
  userEmailAddress:{
    type: String,
    require : true,
    unique : true
  },
  password:{
    type:String,
    require: true,
  },
  cpassword:{
    type:String,
    require:true
  }
});

const Signup=mongoose.model('UserSignup',userSignupSchema);
module.exports=Signup;