import React, { useEffect } from 'react';
import axios from 'axios';
function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      console.log(response);
    });
  }, []);

  return <div>왜안뜨지?</div>;
}

export default LandingPage;
