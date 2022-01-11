const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://mongoadmin:mongoadmin@us2west-a.local:27017/admin";

const app = express();

const port = 3000;

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
    // useCreateIndex:true,
    // useFindAndModfiy:false
}).then(con => {
    //console.log(con.connections);
    console.log('Connetion successful');
}).catch(err => {
    console.log(err);
});

/******* resevervation apis */

/*  Start - Schema and Model */
const resverationsDB = mongoose.connection.useDb('reservations');
const tourSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true,'A tour must have price']
    }
});

const Tour = resverationsDB.model('Tour',tourSchema);

/*** End -  Schema and Model */

/** hotel api's */
const hotelSchema = mongoose.Schema({
    "id":String
});

const Hotel = resverationsDB.model('Hotel',hotelSchema);

app.get('/api/v1/hotels', async (req,res)=>{
    try {
        const hotels = await Hotel.find();
        //console.log(tours);
        res.status(200).json({
             "status":"success",
             "length":hotels.length,
             "data":hotels
        });
      } catch(err){
         console.log(err);
      }
});

app.post('/api/v1/hotels',(req,res)=>{
});

/** tour api's */

app.get('/api/v1/tours',async (req,res)=>{
   try {
   const tours = await Tour.find();
   //console.log(tours);
   res.status(200).json({
        "status":"success",
        "length":tours.length,
        "data":tours
   });
 } catch(err){
    console.log(err);
    }

    
});


app.get('/api/v1/tours/:id',async (req,res)=>{
    try {
    const tours = await Tour.findById(req.params.id);
    //console.log(tours);
    res.status(200).json({
         "status":"success",
        //  "length":tours.length,
         "data":tours
    });
  } catch(err){
     console.log(err);
    }
 
     
 });

app.post('/api/v1/tours',(req,res)=>{
    const testTour = new Tour ({
        name:'The Park Capmer',
        rating: 4.7,
        price: 497.0
    });
    testTour.save().then(doc => {
        console.log(doc);
    }).catch(err => {
        console.log(err);
    });
});

/** user  api's */

const customerSchema = mongoose.Schema({
    "id":String
});

const Customer = resverationsDB.model('Customer',customerSchema,'customers');

app.get('/api/v1/users',async (req,res)=>{
    try {
        const customers = await Customer.find();
        console.log(customers);
        //console.log(tours);
        res.status(200).json({
             "status":"success",
            //  "length":tours.length,
             "data":customers
        });
      } catch(err){
         console.log(err);
        }
});

app.post('/api/v1/users',async (req,res)=>{

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