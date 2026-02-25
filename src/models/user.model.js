import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin']
  },
  pets: {
    type: Array,
    default: []
  }
});

export default mongoose.model('users', userSchema);