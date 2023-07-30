const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const route = require('./route/route');
const cors = require('cors')

//Express app
const app = express();


//MIDDLEWARE
app.use(cors());
app.use(express.json());


app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//ROUTES
app.use('', route);

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_UI)
  .then(() => {
    console.log("MONGODB DATABASE CONNECTED");
//LISTEN FOR REQUEST
app.listen(process.env.PORT, function check(error){
    if(error){
        console.log("SERVER CONNECTION FAILED");
    }else{
        console.log("SERVER STARTED ON ", process.env.PORT);
    }
});
  })
  .catch(err => console.log(err));


