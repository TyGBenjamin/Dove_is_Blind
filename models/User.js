// Require schema and model from mongoose
const { Schema, model } = require("mongoose");

// Construct a new instance of the schema class
const userSchema = new Schema(
  {
    // Configure individual properties using Schema Types
    user: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      uniquie: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "use proper email address",
      ],
    },
    // The type of data is set to 'String' and required is set to false, meaning it will accept null values
    thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],

    // Use built in date method to get current date
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
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

//code for Vitrual

userSchema.virtual("friendCounter").get(function () {
  return this.friends.length;
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const User = model("user", userSchema);

User.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    User.insertMany(
      [
        { user: "ty", email: "ty@ty.com" },
        { user: "tyler", email: "hithere@ty.com" },
        { user: "xavier", email: "thanks@what.com" },
        { user: "allen", email: "al@hello.com" },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = User;
