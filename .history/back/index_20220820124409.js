const express = require('express');
const app = express();
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const config = require('./config/key');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
// 클라이언트에서 오는정보를 서버에서 분석해서 가져옴 body-parser 쓰는법ㄴ
// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
app.use(cookieParser());
const port = 8080;

// 환경변수를이용해 mongoURL 으로 대체하기 성공과 실패 보여주기
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log('mongoDb connected'))
  .catch((err) => console.log(err));

//  /주소 get
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 회원가입 라우터 post로 보내기 postman에서
app.post('/api/users/register', (req, res) => {
  //회원가입정보 ->client에서 가져옴 -> 데이터베이스에 저장
  //   인스턴스 생성
  const user = new User(req.body);

  // mongoDB method 로 저장하는거임
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾기

  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: '제공된 이메일이없다',
      });
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지확인
    // user.js에서 comparePassword 메소드를 만들어서 사용
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });
      }
      // 비밀번호 까지맞다면 토큰 생성
      user.generateToken((err, user) => {
        // jwonwebtoken을 이용한 token생성
        if (err) return res.status(400).send(err);
        //token을 저장한다 어디에? 쿠키에다가일단 저장을함
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSucess: true, userId: user._id });
      });
    });
  });
});

// Router를이용해서 분리를 나중에 할거임!
// middleware는? endpoint에 요청을받은다음 중간에서뭘해줌

// role 1 어드민 role 2 특정부서 어드민 이런식으로 지정 할 수도 있다
// role .0->일반유저 role 이 0이아니면 관리자이런식으로함

app.get('/api/users/auth', auth, (req, res) => {
  // 여기까지 미들웨어를 통과를 해왔다는 이유는 auth가 true라는말임!
  // 클라이언트에게 정보를전달
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,

    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  // 로그아웃 유저를 찾아서 업데이트
  // console.log('req', req.user);
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

// app.get('/api/users/logout', auth, (req, res) => {
//   User.findOneAndUpdate(
//     { _id: req.user._id }, //user를 찾고
//     { token: '' }, // 토큰 삭제
//     (err, user) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).send({
//         success: true,
//       });
//     }
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
