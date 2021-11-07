import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
            {/*<Router>*/}
            {/*    <Navbar/>*/}
            {/*    <Route path='/' component={Home}/>*/}
            {/*    <Route path='/login' component={Login}/>*/}
            {/*    <Route path='/register' component={Register}/>*/}
            {/*</Router>*/}
        {/*<Home/>*/}
        <Register/>
        {/*<Login/>*/}
    </div>
  );
}

export default App;
