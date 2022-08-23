const express = require('express');
const app = express();
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const config = require('./config/key');

// 클라이언트에서 오는정보를 서버에서 분석해서 가져옴
// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

const port = 3002;

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoUR)
  .then(() => console.log('mongoDb connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 회원가입 라우터
app.post('/register', (req, res) => {
  //회원가입정보 ->client에서 가져옴 -> 데이터베이스에 저장
  //   인스턴스 생성

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
