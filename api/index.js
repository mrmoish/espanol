const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1
  }
});


 export  default async function handler(req, res) {
  // try {
  //   // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const collection = client.db('box').collection('exampleCollection');

    const results = await collection.find().toArray();

  //   console.log(results);
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }
    res.status(200).json(results);
}
