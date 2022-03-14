import React from 'react'

import './AuthPage.scss'

const AuthPage = () => {
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
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    name='password'
                                    className='validate'
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className='wawes-effect wawes-light btn btn-blue hoverable '>
                                Войти в аккаунт
                            </button>
                            <a href="/" className="btn-outline btn-reg">Нет аккаунта в приложении?</a>
                        </div>
                    </form>

                    <h3>Регистрация</h3>
                    <form className='form form-login'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name='email'
                                    className='validate'
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    name='password'
                                    className='validate'
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className='wawes-effect wawes-light btn btn-blue hoverable '>
                                Регистрация на сайте
                            </button>
                            <a href="/" className="btn-outline btn-reg">Уже есть аккаунт?</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AuthPage