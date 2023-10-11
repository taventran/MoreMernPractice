
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001; // port server is running on
app.use(bodyParser.json()); // Tell app we're using json

const db = require('./models/')


// Creating new users
app.post('/register', async (req, res) => {
    await db.User.findOne({userName: req.body.userName}).then((user) => {
        if (user) {
            return res.status(400).json({userName: "Username already exists"})
        }
        else {
            const newUser = new db.User({
                userName: req.body.userName,
                password: req.body.password,
            });
            newUser.save()
            return res.status(200).json({msg: newUser})
        }
    });
});

app.get("/feed", async (req, res, next) => {
    try {
        const posts = await db.Post.find({})
        return res.status(200).json(posts)
    } catch (err) {
        next({status: 400, message: "Failed to get posts"})
    }
});

app.post( '/create', async (req, res) =>{
    try {
        const newPost = await new db.Post({
            content: req.body.content,
            title: req.body.title,
            author: req.body.author,
        })
        newPost.save()
        return res.status(200).json({msg: newPost})
    } catch (err) {
        next({status: 400, message: "Failed to create post"})

    }
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


