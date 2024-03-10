import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './layout/AppContainer';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
