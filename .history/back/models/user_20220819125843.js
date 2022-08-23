const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  tokon: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 스키마를 모델로감싸준다
const User = mongoose.model('User', userSchema);
