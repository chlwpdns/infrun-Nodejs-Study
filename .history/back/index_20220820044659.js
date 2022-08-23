const express = require('express');
const app = express();
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const config = require('./config/key');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// 클라이언트에서 오는정보를 서버에서 분석해서 가져옴 body-parser 쓰는법ㄴ
// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

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
app.post('/register', (req, res) => {
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

app.post('/', (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾기
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: '제공된 이메일이없다',
      });
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지확인
    user.comparePassword(req.body.pasaword, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSucess: 'false',
          message: '비밀번호가 틀렸습니다.',
        });
      // 비밀번호 까지맞다면 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //token을 저장한다 어디에? 쿠키에다가일단 저장을함
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
