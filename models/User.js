const mongoose = require('mongoose');

//schema that defines the structure of the user.
const userSchema = new mongoose.Schema({

      name: {
        type: String,
        required: true
      },

      email: {
        type: String,
        required: true,
        unique: true
      },
    
      age: {
        type: Number,
        required: true
      }
});

const User = mongoose.model("User", userSchema);

module.exports = User;