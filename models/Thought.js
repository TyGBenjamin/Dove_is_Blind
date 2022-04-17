// Require schema and model from mongoose
const { Schema, mongoose } = require("mongoose");
const Reaction = require("./Reaction.js");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

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

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(" ")[0];
    const last = v.split(" ")[1];
    this.set({ first, last });
  });

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Thought = mongoose.model("Thought", thoughtSchema);

const handleError = (err) => console.error(err);

module.exports = Thought;
