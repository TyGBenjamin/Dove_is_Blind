// const names = [
//   "Aaran12",
//   "Aaren33",
//   "Aarez99",
//   "Aarman65",
//   "Aaron",
//   "Aaron-James",
//   "Aarron",
//   "Aaryan",
//   "Aaryn65",
//   "Aayan",
//   "Aazaan",
//   "Abaan",
//   "Abbas",
//   "Abdallah65",
//   "Abdalroof",
//   "Abdihakim",
//   "Abdirahman",
//   "Abdisalam",
//   "Abdul",
//   "Abdul-Aziz",
//   "Abdulbasir",
//   "Abdulkadir",
//   "Abdulkarem",
//   "Smith",
//   "Jones",
//   "Coollastname",
//   "enter_name_here",
//   "Ze",
//   "Zechariah",
//   "Zeek",
//   "Zeeshan",
//   "Zeid",
//   "Zein",
//   "Zen",
//   "Zendel",
//   "Zenith",
//   "Zennon",
//   "Zeph22",
//   "Zerah",
//   "Zhen",
//   "Zhi",
//   "Zhong",
//   "Zhuo",
//   "Zi",
//   "Zidane",
//   "Zijie",
//   "Zinedine",
//   "Zion",
//   "Zishan",
//   "Ziya",
//   "Ziyaan",
//   "Zohaib",
//   "Zohair",
//   "Zoubaeir",
//   "Zubair",
//   "Zubayr",
//   "Zuriel",
//   "Xander",
//   "Jared",
//   "Grace",
//   "Alex",
//   "Mark",
//   "Tamar",
//   "Farish",
//   "Sarah",
//   "Nathaniel",
//   "Parker",
// ];

// const thoughts = [
//   "this is great ",
//   "excellent",
//   "coul dbe better",
//   "unsure",
//   "this was ok but can see where improvements are possible",
//   "Monopoly Money Manager always cheats ",
// ];

// const reactions = [
//   "this is great ",
//   "excellent",
//   "coul dbe better",
//   "unsure",
//   "this was ok but can see where improvements are possible",
//   "Monopoly Money Manager always cheats ",
// ];

// const possibleEmails = [
//   "html@one.com",
//   "css@tyler.com",
//   "javascript@java.com",
//   "typescript@type.edu",
//   "go@mail.com",
//   "python@tyler.edu",
//   "rust@rust.com",
//   "React@java.net",
// ];

// const users = [];

// // Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
// const getRandomName = () =>
//   `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// // Gets a random full name
// const getRandomThought = () =>
//   `${getRandomArrItem(thoughts)} ${getRandomArrItem(thoughts)}`;

// // Gets a random email
// const getRandomEmail = () =>
//   `${getRandomArrItem(emails)} ${getRandomArrItem(emails)}`;

// const getUserNames = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(names);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       email: getRandomEmail(),
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

// // Function to generate random applications that we can add to the database. Includes application tags.
// const getRandomThoughts = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArrItem(thoughts),
//       username: [getRandomArrItem(names)],
//       buildSuccess: Math.random() < 0.5,
//       reactions: [...getReactions(3)],
//     });
//   }
//   return results;
// };

// // Create the tags that will be added to each application
// const getApplicationTags = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleTags);
//   }
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       tagBody: getRandomArrItem(possibleTags),
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

// // Export the functions for use in seed.js
// module.exports = {
//   getRandomName,
//   getRandomThought,
//   getRandomThoughts,
//   getUserNames,
//   getRandomEmail,
// };
