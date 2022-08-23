const express = require('express');
const app = express();
const { User } = require('./models/user');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3002;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://chlwpdns2:dns1563@cluster0.odgn4ue.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('mongoDb connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 회원가입 라우터
app.post('/register', (req, res) => {
  //회원가입정보 ->client에서 가져옴 -> 데이터베이스에 저장
  //   인스턴스 생성
  const user = new User();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
