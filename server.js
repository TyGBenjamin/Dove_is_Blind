const express = require("express");
// Run npm install mongodb and require mongodb and MongoClient class
const mongodb = require("mongodb").MongoClient;

const routes = require("./routes");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://localhost:27017/doveDB`;

// Declare a variable to hold the connection
let db;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(port, () => {
      console.log(`Social Media API is listening at http://localhost:${port}`);
    });
  }
);
