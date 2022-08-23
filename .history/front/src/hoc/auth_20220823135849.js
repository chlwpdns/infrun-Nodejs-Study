import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function auth(a, b, c = null) {
  // 쿠키르링용해서 로그인한 유자인지 아닌지 판단을해서 리엑트부분에 정보를 전달을 해줌
  function Authcheck(props) {
    useEffect(() => {
      // redux사용\

      const dispatch = useDispatch();
      //   Axios.get('/api/users/auth');
    }, []);
  }

  return <div>auth</div>;
}
