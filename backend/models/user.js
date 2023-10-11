const mongoose = require("mongoose")

var UserSchema = new mongoose.Schema( {
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = User = mongoose.model("User", UserSchema);
