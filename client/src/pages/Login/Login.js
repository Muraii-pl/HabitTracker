import React from 'react';
import MainTemplate from "../../templates/MainTemplate";
import "./login.css";
import {Helmet} from 'react-helmet'

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Habits Tracker - Login</title>
            </Helmet>
        <MainTemplate>
            <div className='loginContainer'>
                <p className='title'>Logowanie</p>
                <input type='text' className='loginInput' placeholder='Podaj adres email'/><br/>
                <input type='text' className='loginInput mb-3' placeholder='Podaj hasło'/><br/>
                <button className='mainButtonPink'>Zaloguj się</button>
            </div>
        </MainTemplate>
</>
    );
};

export default Login;