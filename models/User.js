const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)