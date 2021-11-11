import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {AuthContext} from "./helpers/AuthContext";
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
                        {/*<Route path='/user/:id' element={}/>*/}
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
