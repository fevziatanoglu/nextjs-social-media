import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: { type:String , require: true},
    username : { type:String , require: true},
    name : { type:String },
    bio : { type:String },
    image : { type:String },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],  
    onboarded : { type:Boolean , default: false}

});

//           from database        || create new model
const User = mongoose.models.User || mongoose.model("User" , userSchema);
export default User;
