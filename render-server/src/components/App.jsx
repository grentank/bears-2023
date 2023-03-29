import React from 'react';
import axios from 'axios';

export default function App({ hello }) {
  const clickHandler = () => {
    axios('http://localhost:3000/api')
      .then((res) => console.log(res.data))
      .catch(console.log);
  };
  const clickHandlerApi = () => {
    axios('https://http.cat/200')
      .then((res) => console.log(res.data))
      .catch(console.log);
  };
  return (
    <div>
      Hello, {hello}
      <button type="button" onClick={clickHandler}>
        TO OUR SERVER
      </button>
      <button type="button" onClick={clickHandlerApi}>
        TO API SERVER
      </button>
    </div>
  );
}
