// const connection = require("../config/connection");
// const { User, Thought } = require("../models");
// const { getRandomName, getRandomThoughts, getRandomEmail } = require("./data");

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");
//   await Thought.deleteMany({});
//   await User.deleteMany({});

//   const users = [];
//   const thoughts = getRandomThoughts(10);

//   for (let i = 0; i < 20; i++) {
//     const username = getRandomName();

//     users.push({
//       username,
//       email: getRandomEmail(),
//     });
//   }

//   await User.collection.insertMany(users);
//   await Thought.collection.insertMany(thoughts);

//   // loop through the saved applications, for each application we need to generate a application response and insert the application responses
//   console.table(users);
//   console.table(thoughts);
//   console.info("Seeding complete! 🌱");
//   process.exit(0);
// });
