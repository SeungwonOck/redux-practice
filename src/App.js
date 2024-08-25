import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useState } from 'react';
import Box from './component/Box';

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }

  const decrease = () => {
    dispatch({type: "DECREMENT", payload: {num: 5}})
  }
  
  const login = () => {
    dispatch({type: "LOGIN", payload: { id: "noona", password: "123"}})
  }
  return (
    <div>
      <h1>{id}</h1>
      <h2>{password}</h2>
      <button onClick={login}>로그인</button>
      <p>You clicked {count} times</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Box />
    </div>
  );
}

export default App;
