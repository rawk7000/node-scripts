const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'
const dotenv = require('dotenv').config()

//console.log(dotenv)

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("node-js");
    const movies = database.collection("coll-name");
    
    const findResult = await movies.find({}).toArray();
    console.log('Found documents =>', findResult);

    const query = { name: "3213131" };
    const options = {
      /*sort: { "imdb.rating": -1 },
      projection: { _id: 0, title: 1, imdb: 1 },*/
    };
    //const movie = await movies.findOne(query, options);

    // since this method returns the matched document, not a cursor, print it directly
    //console.log(movie);
  
    } finally {
        await client.close();
  }
}

run().catch(console.dir);