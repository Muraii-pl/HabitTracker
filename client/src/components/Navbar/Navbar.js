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
            <Link to='/'>Home</Link>
            {!authState.status ? (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            ):(
                <>
                    <Link to={'/trackers'}>Moje Habits Trackers</Link>
                    <span>{authState.username}</span>
                    <button onClick={logout}>Wyloguj się</button>
                </>
            )
            }
        </div>
    )
};

export default Navbar