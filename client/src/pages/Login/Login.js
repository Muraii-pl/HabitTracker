import React,{useState,useContext} from 'react';
import MainTemplate from "../../templates/MainTemplate";
import "./login.css";
import {Helmet} from 'react-helmet'
import axios from "axios";
import {AuthContext} from "../../helpers/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [remember,setRemember] = useState(false)
    const {setAuthState} = useContext(AuthContext)
    let navigate = useNavigate()

    const login = () => {
        const data = {username:username, password:password,remember:remember}
        axios.post("http://localhost:3001/auth/login",data).then((response)=>{
            if(response.data.message){
                console.log(response.data.message)
            } else {
                localStorage.setItem("accessToken",response.data.token)
                setAuthState({
                    username:response.data.username,
                    id:response.data.id,
                    status:true
                })
                navigate("/")
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Habits Tracker - Login</title>
            </Helmet>
        <MainTemplate>
            <div className='loginContainer'>
                <p className='title'>Logowanie</p>
                <input type='text' className='loginInput' placeholder='Podaj nazwe użytkownika' name="username" onChange={(event => {setUsername(event.target.value)})}/><br/>
                <input type='password' className='loginInput mb-3' placeholder='Podaj hasło' name="password" onChange={(event => {setPassword(event.target.value)})}/><br/>
                <div className="login__options">
                    <label htmlFor="remember">Pozostań zalogowanym</label><input type="checkbox" name="remember" onChange={(event => {setRemember(!remember)})}/>
                </div>
                <button className='mainButtonPink' onClick={login}>Zaloguj się</button>
            </div>
        </MainTemplate>
</>
    );
};

export default Login;