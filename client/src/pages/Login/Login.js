import React from 'react';
import MainTemplate from "../../templates/MainTemplate";
import "./login.css";

const Login = () => {
    return (
        <MainTemplate>
            <div className='loginContainer'>
                <p className='title'>Logowanie</p>
                <input type='text' className='loginInput' placeholder='Podaj adres email'/><br/>
                <input type='text' className='loginInput mb-3' placeholder='Podaj hasło'/><br/>
                <button className='mainButtonPink'>Zaloguj się</button>
            </div>
        </MainTemplate>
    );
};

export default Login;