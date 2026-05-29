import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
       type : String,
       required :  true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    message : {
      type : String,
      
    }
});

const User = mongoose.model("newUser", userSchema);

export default User;