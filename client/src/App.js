import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthContext} from "./helpers/AuthContext";

import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TrackersList from "./pages/TrackersList/TrackersList";
import Tracker from "./pages/Tracker/Tracker";

import './App.css';

function App() {
    const [authState,setAuthState] = useState({
        username:"",
        id:0,
        status:false
    })


    return (
        <div className="container">
            <AuthContext.Provider value={{authState, setAuthState}}>
                <Router>
                    <Routes>
                        <Route path='/' index element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/trackers' element={<TrackersList/>}/>
                        <Route path='/trackers/:id' element={<Tracker/>}/>
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
