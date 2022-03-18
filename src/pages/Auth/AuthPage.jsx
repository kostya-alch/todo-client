
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';

import './AuthPage.scss'

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const { login } = useContext(AuthContext);
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const submitForm = (event) => {
        event.preventDefault();
    }
    const loginHandler = async () => {
        login(form)
    }
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <h3>Авторизация</h3>
                    <form onSubmit={submitForm} className='form form-login'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name='email'
                                    className='validate'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    name='password'
                                    className='validate'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row row-button-form">
                            <button className='wawes-effect wawes-light btn btn-login btn-blue hoverable '
                                onClick={loginHandler}>
                                Войти в аккаунт
                            </button>
                            <Link to="/registration" className="btn-outline btn-reg">Нет аккаунта в приложении?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthPage