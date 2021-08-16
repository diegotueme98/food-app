const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String
});

mongoose.model('users', userSchema);
