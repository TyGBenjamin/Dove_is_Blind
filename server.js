const express = require("express");
// Run npm install mongodb and require mongodb and MongoClient class
// const mongodb = require("mongodb").MongoClient;
const db = require("./config/connection.js");

const routes = require("./routes");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(port, () => {
    console.log(`Social Media API is listening at http://localhost:${port}`);
  });
});
