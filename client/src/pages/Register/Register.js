import React,{useState} from 'react';
import MainTemplate from "../../templates/MainTemplate";
import './register.css'
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet'

import axios from 'axios'
import {Formik, Form,Field,ErrorMessage} from 'formik'
import * as Yup from "yup"

const Register = () => {
    const navigate = useNavigate()
    const initialValues = {
        username:"",
        password:"",
        name:"",
        email:""
    }

    const [username,setUsername] = useState(false)
    const [email,setEmail] = useState(false)

    const validationSchema = Yup.object().shape({
        username:Yup.string().min(3,"Minimalnie 3 znaki").max(20,"Maksymalnie 20 znaków").required("Pole wymagane"),
        password: Yup.string().min(8,"Minimum 8 znaków").required("Pole wymagane"),
        name:Yup.string().min(3,"Minimalnie 3 znaki").required("Pole wymagane"),
        email: Yup.string().email("Sprawdź poprawność emaila").required("Pole wymagane")
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth/register",data).then((response)=>{
            console.log(response.data)
            if(response.data.message === "User Exist"){
                setUsername(true)
            }
            else if(response.data.message === "Email Busy"){
                setEmail(true)
            }
            else{
            navigate('/login')
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Habits Tracker - Register</title>
            </Helmet>
        <MainTemplate>
            <div className='registerContainer'>
                <p className='title'>Rejestracja</p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="register__form">
                        <Field autoComplete="off" name="username" placeholder="Podaj nazwę użytkownika" className='registerInput'/>
                        <ErrorMessage name="username" className="register__error_message username" component="span"/>
                        {
                            username && (<span className="register__error_message">Istnieje już taki użytkownik</span> )
                        }


                        <Field autoComplete="off" type="password" name="password" placeholder="Podaj hasło" className='registerInput'/>
                        <ErrorMessage name="password" className="register__error_message password" component="span"/>

                        <Field autoComplete="off" type="string "name="name" placeholder="Podaj Imię" className='registerInput'/>
                        <ErrorMessage name="name" className="register__error_message name" component="span"/>


                        <Field autoComplete="off" type="email" name="email" placeholder="Podaj Email" className='registerInput mb-3'/>
                        <ErrorMessage name="email" className="register__error_message email" component="span"/>
                        {
                            email && (<span className="register__error_message">Taki email jest już wykorzystany</span> )
                        }

                        <button type="submit" className='mainButtonPink'>Załóż konto</button>
                    </Form>
                </Formik>

            </div>
        </MainTemplate>
        </>
    );
};

export default Register;