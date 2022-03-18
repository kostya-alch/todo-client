import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='warning' >
            <span className='warning__text'>Error 404 Not Found</span>
            <Link className='warning__back' to='/'>Вернуться на главную страницу</Link>
        </div >
    )
}

export default NotFound