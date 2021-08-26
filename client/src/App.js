import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = props => {
  const [state, setState] = useState('');

  useEffect(() => {
    axios.get('/hello')
    .then(res => setState(res.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      {state}
    </div>
  );
}

export default App;