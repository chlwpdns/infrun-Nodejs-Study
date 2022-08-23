let auth = (req, res, next) => {
  // 인증처리하는곳
  // 1.클라이언트 쿠키에서 토큰을 가져옴
  //   2.토큰을복호화를하고 유저를 찾음
  //   유저있으면 인증 ok
  //   유저가없으면 인증No!
};

module.exports = { auth };
