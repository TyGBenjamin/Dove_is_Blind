// Require schema and model from mongoose
const mongoose = require("mongoose");

// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema(
  {
    // Configure individual properties using Schema Types
    thoughtText: { type: String, min: 1, max: 280, required: true },
    // The type of data is set to 'String' and required is set to false, meaning it will accept null values
    // Use built in date method to get current date
    createdAt: { type: Date, default: Date.now },
    username: [{ type: Schema.Types.ObjectId, ref: "user" }],
    reactions: [{ type: Schema.Types, ref: "reaction" }],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Thought = mongoose.model("Thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = User;
