const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/twit-clone", {
    // Connecting to mongodb database
    keepAlive: true,
    useNewURLParser: true,
    useUnifiedTopology: true,
}) 

mongoose.set("debug", true)
mongoose.Promise = Promise

module.exports.User = require("./user")
module.exports.Post = require("./post")