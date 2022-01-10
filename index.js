
// import { MongoClient } from 'mongodb';
const mongoose = require('mongoose');
const url = "mongodb://mongoadmin:mongoadmin@us2west-a.local:27017/admin";
const MongoCollection = () => {
    console.log('in movie collecton');
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
    // return (
    //     <div></div>
    // )
}

console.log(MongoCollection());

// export default MongoCollection;