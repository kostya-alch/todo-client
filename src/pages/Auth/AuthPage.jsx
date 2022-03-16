import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './AuthPage.scss'

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
        console.log(form);
    }
    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <h3>Авторизация</h3>
                    <form className='form form-login'>
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
                        <div className="row">
                            <button className='wawes-effect wawes-light btn btn-blue hoverable '>
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