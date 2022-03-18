import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

import './Navbar.scss'

const Navbar = () => {
    const { logout, isLogin } = useContext(AuthContext)
    return (
        <header>
            <nav>
                <div className="nav-wrapper navbar">
                    <a href="/" className="brand-logo left">Список дел</a>
                    {
                        isLogin
                            ? <ul id="nav-mobile" className="right">
                                <li><Link className='hoverable link' to="/login" onClick={logout}>Выйти</Link></li>
                            </ul>
                            : <ul id="nav-mobile" className="right">
                                <li><Link className='hoverable link' to="/login">Войти в аккаунт</Link></li>
                            </ul>
                    }
                </div>
            </nav>
        </header>

    )
}

export default Navbar