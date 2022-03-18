import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './RegistrationPage.scss'
import { register } from '../../actions/userAPI';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const submitForm = (event) => {
        event.preventDefault();
    };

    const registerHandler = () => {
        register(form)
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <div className="auth-page">
                    <h3>Регистрация</h3>
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
                        <div className="row">
                            <button
                                onClick={registerHandler}
                                className='wawes-effect wawes-light btn btn-blue hoverable '>
                                Регистрация на сайте
                            </button>
                            <Link to="/login" className="btn-outline btn-reg">Уже есть аккаунт?</Link>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default RegistrationPage