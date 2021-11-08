import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
