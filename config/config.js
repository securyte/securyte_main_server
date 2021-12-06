const mongoose =  require('mongoose')

const URI = process.env.MONGODB_URL || process.env.MONGODB_LOCAL_URL;

mongoose.connect(`${URI}`, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to mongodb')
})

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sec_main:<password>@main.kbhpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
