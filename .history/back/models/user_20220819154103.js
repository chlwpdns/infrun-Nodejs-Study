const mongoose = require('mongoose');

// 모델: 스키마를감싸줌
// 스키마 : 상품의 이름의 정보와 타입을 적어줌
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

//
userSchema.pro('save');

// 스키마를 모델로감싸준다
const User = mongoose.model('User', userSchema);

module.exports = { User };
