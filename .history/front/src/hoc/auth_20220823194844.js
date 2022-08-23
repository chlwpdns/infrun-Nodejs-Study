import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function auth(a, b, c = null) {
  // 쿠키르링용해서 로그인한 유자인지 아닌지 판단을해서 리엑트부분에 정보를 전달을 해줌

  //   null=>아무나출입
  // true=>로그인한 유저만 출입이가능
  // false=>로그인한 유저는 출입이 불가
  function Authcheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      // redux사용 백에서 처리에온 애들이 response에있음
      dispatch(auth()).then((response) => {
        console.log(response);
      });

      //   Axios.get('/api/users/auth');
    }, []);

    return <a />;
  }

  return <div>auth</div>;
}
