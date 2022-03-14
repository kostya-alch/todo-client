import React from 'react'

import './Navbar.scss'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper navbar">
                    <a href="/" className="brand-logo center">Список дел</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a className='hoverable link' href="/">Войти в аккаунт</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Navbar