const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    users: {
        user: String,
        trim: true
    }
})

const Users = mongoose.model("User", UserSchema);

module.exports = Users;


