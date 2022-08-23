// const { User } = require('../models/user');

// let auth = (req, res, next) => {
//   // 인증처리하는곳

//   // 1.클라이언트 쿠키에서 토큰을 가져옴
//   let token = req.cookies.x_auth;

//   //   2.토큰을복호화를하고 유저를 찾음
//   User.findByToken(token, (err, user) => {
//     if (err) throw err;
//     // 유저가없으니 이렇게 전달
//     if (!user) return res.json({ isAuth: false, error: true });

//     // 유저가있으면? 토큰과 유저정보를 넣어줌
//     // req에 토큰과 유저를 넣는이유는 넣어줌으로인해서 auth에서  req.user를하면 유저의 정보를 얻을 수 있음.
//     req.token = token;
//     req.user = user;
//     // middleware 이동방식
//     next();
//   });

//   //   유저있으면 인증 ok

//   //   유저가없으면 인증No!
// };

// module.exports = { auth };
const { User } = require('../models/user');

let auth = (req, res, next) => {
  //여기서 인증처리를 할 예정

  //클라이언트 쿠키에서 토큰을 가져옴
  let token = req.cookies.x_auth;

  //토큰을 복호화한 후 유저를 찾는다
  User.findByToken(token, (err, user) => {
    if (err) throw err;

    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token; //token과 user를 req로 넘겨주면 index에서 사용이 가능하게됨
    req.user = user;
    next(); //여기 next()가 없으면 index.js에서 지정해준 auth라는 미들웨어에 갖혀서 못나옴
  });

  //유저가 있으면 인증 오케이

  //유저가 없으면 인증 No!
};

module.exports = { auth };
