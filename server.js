const express = require("express");
const cors = require("cors");

const app = express();
require('dotenv').config();
const db = require("./models");
const { mongoose } = require("./models");
const Album = db.album;
const Item = db.item;

var corsOptions = {
  origin: "http://localhost:8081",
  origin: "http://localhost:8080",
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

db.mongoose
  .connect(process.env.HOST, {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get('/api/products', (req,res) => {
    Album.find({})
    .then((result)=> {
      res.status(200).json(result);
    })
    .catch((err)=>{
      res.status(404);
    })
  });
app.get('/api/items', (req,res) => {
  Item.find({})
  .then((result)=> {
    res.status(200).json(result);
  })
  .catch((err)=>{
    res.status(404);
  })
});
  
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

app.post("/api/auth/edit", function(req,res){   
  db.user.findByIdAndUpdate(req.body.id, { usernamename:  req.body.username, email:req.body.email },   
 function(err) {  
  if (err) {  
  res.send(err);  
  return;  
  }  
  res.send({data:"Record has been Updated"});  
  });  
 }
); 
