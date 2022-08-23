const { User } = require('../models/user');
let auth = (req, res, next) => {
  // 인증처리하는곳

  // 1.클라이언트 쿠키에서 토큰을 가져옴
  let token = req.cookies.x_auth;

  //   2.토큰을복호화를하고 유저를 찾음
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    // 유저가없으니 이렇게 전달
    if (!user) return res.json({ isAuth: false, error: true });
    // 유저가있으면?
    req.token = token;
    req.user = user;
  });

  //   유저있으면 인증 ok

  //   유저가없으면 인증No!
};

module.exports = { auth };
