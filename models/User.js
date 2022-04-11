// Require schema and model from mongoose
const mongoose = require("mongoose");

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  user: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
      message: (props) => `${props.text} is not a valid phone number!`,
    },
    required: true,
    trim: true,
  },
  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
  thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],

  stockCount: Number,
  price: Number,
  inStock: Boolean,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const User = mongoose.model("User", userSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a document
// Book.create(
//   {
//     title: "Diary of Anne Frank",
//     author: "Anne Frank",
//     publisher: "Scholastic",
//     stockCount: 10,
//     price: 10,
//     inStock: true,
//   },
//   (err) => (err ? handleError(err) : console.log("Created new document"))
// );

module.exports = User;
