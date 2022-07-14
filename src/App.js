
import './App.css';
import React from 'react';
import useToken from './components/useToken';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom'
import {  } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <Routes>
          <Route exact path="/" element={<Login setToken={setToken} />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
};

export default App;
