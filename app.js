const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const { connectdb } = require("./config/db");
const { urlRouter } = require("./routes/urlRoute");

require("dotenv").config();


// app config

const app= express();
const PORT=process.env.PORT


//middleware
 
app.use(express.json()); 
app.use(cors());
app.use('/api/url',urlRouter);
app.use(express.static('htmlRoutes/Home-Page'));

app.get('/',(req,res)=>{
        res.sendFile(__dirname + '/htmlRoutes/Home-Page/index.html');
})
  

connectdb();

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
