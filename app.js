const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://mongoadmin:mongoadmin@us2west-a.local:27017/admin";

const app = express();

const port = 3000;

/******* resevervation apis */

/** hotel api's */

app.get('/api/v1/hotels',(req,res)=>{

    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true 
        // useCreateIndex:true,
        // useFindAndModfiy:false
    }).then(con => {
        console.log(con.connections);
        console.log('Connetion successful');
    }).catch(err => {
        console.log(err);
    });


});

app.post('/api/v1/hotels',(req,res)=>{

});


/** tour api's */

app.get('/api/v1/tours',(req,res)=>{

    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true 
        // useCreateIndex:true,
        // useFindAndModfiy:false
    }).then(con => {
        console.log(con.connections);
        console.log('Connetion successful');
    }).catch(err => {
        console.log(err);
    });


});

/** tour api's */

app.get('/api/v1/tours',(req,res)=>{

    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true 
        // useCreateIndex:true,
        // useFindAndModfiy:false
    }).then(con => {
        console.log(con.connections);
        console.log('Connetion successful');
    }).catch(err => {
        console.log(err);
    });


});

app.post('/api/v1/users',(req,res)=>{

});


/** reviews api's */

app.get('/api/v1/reviews',(req,res)=>{

    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true 
        // useCreateIndex:true,
        // useFindAndModfiy:false
    }).then(con => {
        console.log(con.connections);
        console.log('Connetion successful');
    }).catch(err => {
        console.log(err);
    });


});

app.post('/api/v1/reviews',(req,res)=>{

});

app.get('/',(req,res)=>{
    //res.status(200).send("Hello from server side");
    res.status(200).json({
        "message":"Hello from server side",
        "app":"resverations"
    });
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);

});