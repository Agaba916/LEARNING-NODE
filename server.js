require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(express.json());//middleware to parse incoming json data otherwise req.body will be undefined.

//connecting to mongoDB
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}` +
            `@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected successfully"))
.catch((error) => console.log("Database connection error: ", error));


//ROUTES

//simplest test route
app.get("/", (req,res)=>{
    res.send("Backend is running");
});

//handles post requests to /users
app.post("/users", async(req, res)=>{
    try{
        const user = await User.create(req.body);
        res.json(user);
    }catch(error){
        res.status(500).json({error: error.message});
    }

});

//get all users

app.get("/users", async (req,res)=>{
    try{
        //fetch all users from db
        const users = await User.find();

        res.json(users);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));