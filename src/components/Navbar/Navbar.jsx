import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper navbar">
                    <a href="/" className="brand-logo left">Список дел</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link className='hoverable link' to="/login">Войти в аккаунт</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Navbar