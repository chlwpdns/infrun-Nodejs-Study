import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../action/user_action';

// 여기에 props를 줘서 했었어야됨 ㅠ
export default function Auth({ SpecificComponent, option, adminRoute = null }) {
  // 쿠키르링용해서 로그인한 유자인지 아닌지 판단을해서 리엑트부분에 정보를 전달을 해줌

  //   null=>아무나출입
  // true=>로그인한 유저만 출입이가능
  // false=>로그인한 유저는 출입이 불가

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useEffect사용해줌
  useEffect(() => {
    dispatch(auth()).then((response) => {
      console.log(response);
      // 로그인 하지않은 상태
      if (!response.payload.isAuth) {
        if (option) {
          navigate('/login');
        }
      } else {
        // 로그인 한 상태
        if (adminRoute && !response.payload.isAdmin) {
          navigate('/');
        } else {
          if (option === false) {
            navigate('/');
          }
        }
      }
    });
  }, []);
  // #1번방법 useEffect를 사용하지않으면?

  //   Axios.get('/api/users/auth');

  return <SpecificComponent />;

  ///////////////////
  //리랜더링안되게 useEffiect사용
}
