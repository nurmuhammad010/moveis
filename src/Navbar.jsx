import React from 'react'
import { Link } from 'react-router-dom'
import NavbarData from './mock/NavbarData'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul className="menu">
                {
                    NavbarData.map(i => (
                        <Link to={i.link} ><li className="link-item">{i.title}</li></Link>
                    ))
                }
            </ul>
        </div>
    )
}
