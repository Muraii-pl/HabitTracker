import React from 'react';
import MainTemplate from "../../templates/MainTemplate";
import './register.css'

const Register = () => {
    return (
        <MainTemplate>
            <div className='registerContainer'>
                <p className='title'>Rejestracja</p>
                <input type='text' className='registerInput' placeholder='Podaj adres email'/><br/>
                <input type='text' className='registerInput' placeholder='Podaj nazwę użytkownika'/><br/>
                <input type='text' className='registerInput' placeholder='Podaj hasło'/><br/>
                <input type='text' className='registerInput mb-3' placeholder='Potwierdź hasło'/><br/>
                <button className='mainButtonPink'>Załóż konto</button>
            </div>
        </MainTemplate>
    );
};

export default Register;