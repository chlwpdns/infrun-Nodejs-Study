const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// 모델: 스키마를감싸줌
// 스키마 : 상품의 이름의 정보와 타입을 적어줌
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  tole: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//몽구스메서드
// usermodle에 유저정보를 저장하기전에 함수를주고 다끝나면다시 save로넘어간다.
// next를 하면은 index안에있는 next로 들어와버림!
userSchema.pre('save', function (next) {
  // user table가져오기
  var user = this;
  //
  if (user.isModified('password')) {
    // 비밀번호 암호화 시키기
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        //암호화 비번만드는데 성공을 하면 패스워드를 해시값으로 교체
        user.password = hash;
        next();
      });
    });
  } else {
    // 만약에 따른것을바꿀때에는 next를 설정을해줘야 다음으로 넘어감! 없으면 그냥머무는거임
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //평문을 암호화해서 암호문과 같은지 체크

  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // 비밀번호가 같지않다
    if (err) return cb(err);
    // 비밀번호가 같다면
    cb(null, isMatch);
  });
};

// 콜백함수가 한개니까 하나의 콜백만선언
userSchema.methods.generateToken = function (cb) {
  var user = this;

  // jsonwebtoken 을이용해서 토큰생성하기

  var token = jwt.sign(user._id.toHexString(), 'secretToken');
  // user._id + 'secreToken'=token
  // ->  'secretToken' ->user.id

  // 현재 index의 user정보에온거임
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user); //여기서 callback함수를 받은 user정보가 index의 user.generateToken의 user로감
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  // 토큰을 가져와서 복호화 하는과정임
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // 유저아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확잉
  });
};

// 스키마를 모델로감싸준다
const User = mongoose.model('User', userSchema);

module.exports = { User };
