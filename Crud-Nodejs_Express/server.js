const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


//middleware
//Parse request data, content type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//Parse request data, content type: application/json
app.use(bodyParser.json());


// import regRoutes
const userRoutes = require('./src/routes/registration.Route')

app.use("/eyestore/registration",userRoutes);


app.get("/", (req, res)=>{
    res.send("Hey! It's Working Fine...")
})


app.listen(port, ()=>{
    console.log("Server Is Runnning On Port : "+port);
});