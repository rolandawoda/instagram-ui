import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import Profile from './components/profile';
import EditProfile from './components/edit_profile';
import AppContainer from './components/app_container';
import Login from './components/login';

import Routes from './route';


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
