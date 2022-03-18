import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Layout.scss'
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout