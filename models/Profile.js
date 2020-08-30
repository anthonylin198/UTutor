const mongoose = require("mongoose");

// has references to the user schema
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  university: {
    type: String,
  },
  major: {
    type: String,
  },
  hourlyRate: {
    type: Number,
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
