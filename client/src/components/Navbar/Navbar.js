import React, {useEffect,useContext} from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
import {AuthContext} from "../../helpers/AuthContext";
import axios from "axios";

const Navbar = () => {
    const {authState, setAuthState} = useContext(AuthContext)
    useEffect(() => {
        axios.get('http://localhost:3001/auth/auth', {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            if (response.data.error) {
                setAuthState({
                    ...authState,
                    status: false
                })
            } else {
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    status: true
                })
            }
        }).catch((err)=>{
            localStorage.removeItem("accessToken")
            setAuthState({
                username:"",
                id:0,
                status:false
            })
        })
    }, [])

    const logout = () => {
        localStorage.removeItem("accessToken")
        setAuthState({
            username:"",
            id:0,
            status:false
        })
    }

    return (
        <div className="navigation">
            {!authState.status ? (
                <div className="logout">
                    <Link to="/login"><span className="login">Logowanie</span></Link>
                    <Link to="/register"><span className="register">Rejestracja</span></Link>

                </div>
            ):(
                <div className="login">
                    <Link to={'/trackers'}>Moje Habits Trackers</Link>
                    <div className="login__right">
                        <span>{authState.username}</span>
                        <button onClick={logout} className="login__button">Wyloguj się</button>
                    </div>

                </div>
            )
            }
        </div>
    )
};

export default Navbar