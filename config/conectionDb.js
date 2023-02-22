

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Tettacorp:Fullstack23@cluster17.63yiu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ecommerce").collection("users");
  // perform actions on the collection object
  client.close();
});


module.exports = { dbConnection }




