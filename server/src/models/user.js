import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender:{
        type: String
    },
    height: {
        type: Number,
        default: 0,
    },
    weight: {
        type: Number,
        default: 0,
    },
    profilePicture: {
        type: String,
        default: '',
    }
});

const User = mongoose.model("User", userSchema);

export default User;