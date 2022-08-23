import axios from 'axios';

export function loginUser(dataToSubmit) {
  const request = axios.post('/api/user/login', body).then((response) => {
    {
      response.data;
    }
    // 리듀서한테 보내기
    return {
        type:,
        
    };
  });
}
