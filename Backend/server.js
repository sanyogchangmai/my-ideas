require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Idea = require("./models/idea");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ! Connecting to DB !
const URL = process.env.DB_URI;
mongoose.connect(URL,{ useNewUrlParser: true })
.then((result) => console.log("Connected to DB"))
.catch((err) => console.log(err))

app.get("/", (req, res) => {
    Idea.find().sort({createdAt: -1})
    .then(ideas => res.json(ideas))
	.catch(err => res.status(400).json('Error: ' + err));
  });

app.post("/",function(req,res){
    const idea = new Idea({
        title: req.body.title,
        body: req.body.body,
    });
    idea.save()
     .then(() => {
         res.json("User Added")
     })
     .catch(err => res.status(400).json('Error: ' + err));
})


app.get("/ideas/:id",function(req,res){
    Idea.findById(req.params.id)
      .then(ideas => res.json(ideas))
      .catch(err => res.status(400).json('Error: ' + err));
});

app.delete("/ideas/:id",function(req,res){
    Idea.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});


app.put("/ideas/:id",function(req,res){
    const id = req.params.id;
    console.log(id);
    Idea.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
      .then(() => res.json('Exercise Edited.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(process.env.PORT || 5000,function(){
    console.log("Server is running at port 5000");
});